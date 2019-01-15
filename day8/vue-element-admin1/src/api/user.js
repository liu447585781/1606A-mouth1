import request from '@/utils/request'

export function getUserList(params) {
    return request({
        url: 'users/list',
        method: 'get',
        params
    })
}

export function updateUserInfo(data) {
    return request({
        url: 'users/update',
        method: 'post',
        data
    })
}