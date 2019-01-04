import JSBridge from '../utils/JSBridge.js'

function sendRequest(url, method = 'GET', data = {}) {
    let params = {
        method
    };
    if (method == 'POST') {
        params.body = JSON.stringify(data)
    }
    if (url.indexOf('?') == -1) {
        url += `?_=${+new Date()}`
    } else {
        url += `&_=${+new Date()}`
    }
    return fetch(url, params)
        .then(res => res.json())
        .then(body => body)
}

export let uploadImg = (type) => {
    return new Promise((resolve, reject) => {
        JSBridge.invoke('device', 'chooseImage', {
            type,
            chooseCallbackName: function(res) {
                resolve(res)
            }
        })
    })
}

export let cityList = () => {
    return sendRequest('/api/ExchangeJiaZhao/cityList')
}

export let costList = (...parmas) => {
    return sendRequest(`/api/ExchangeJiaZhao/getCostList?order_type=${parmas[0]}&province_id=${parmas[1]}&city_id=${parmas[2]}`)
}

export let goLogin = () => {
    JSBridge.invoke('app', 'login', {
        loginCallBackName: () => window.reload()
    })
}

export let isVip = () => {
    return sendRequest('https://vip.chelun.com/api/status')
}

export let goPay = () => {
    JSBridge.invoke('app', 'pay', {
        price: 398.00,
        orderNum: '6486860195682793473',
        channels: ["weixin", "alipay", "baidu"],
        callbackUrl: 'https://h5.chelun.com/2017/update-licence2/order.html'
    });
}