import Cookie from 'js-cookie'

export let getToken = () => {
    return Cookie.get('chelun_acToken') || '';
}