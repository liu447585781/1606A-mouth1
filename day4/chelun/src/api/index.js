import JSBridge from '../utils/JSBridge.js'

function sendRequest(url, method = 'GET', data = {}) {
    let params = {
        method,
        headers: {
            'content-type': 'application/json'
        }
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

// 图片上传
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

// 获取签发城市
export let cityList = () => {
    return sendRequest('/api/ExchangeJiaZhao/cityList')
}

// 获取可补换的城市
export let costList = (...parmas) => {
    return sendRequest(`/api/ExchangeJiaZhao/getCostList?order_type=${parmas[0]}&province_id=${parmas[1]}&city_id=${parmas[2]}`)
}

// 唤醒登陆
export let goLogin = () => {
    JSBridge.invoke('app', 'login', {
        loginCallBackName: () => window.reload()
    })
}

// 获取用户是否是会员
export let isVip = () => {
    return sendRequest('https://vip.chelun.com/api/status')
}

// 唤起支付
export let goPay = () => {
    JSBridge.invoke('app', 'pay', {
        price: 398.00,
        orderNum: '6486860195682793473',
        channels: ["weixin", "alipay", "baidu"],
        callbackUrl: 'https://h5.chelun.com/2017/update-licence2/order.html'
    });
}

// 唤醒分享
export let goShare = () => {
    JSBridge.invoke('ui', 'shareMessage');
}

// 上传base64图片
export let uploadBase64 = (base64) => {
    return sendRequest('http://123.206.55.50:11000/upload_base64', 'POST', { base64 })
}

export let imgTobase64 = (url) => {
    return sendRequest('http://123.206.55.50:11000/tobase64', 'POST', { url })
}