import service from "../utils/axios"

/**
 * 管理员信息接口
 * 
 */
export function GetUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'boss/findAll',
        data: data
    })
}
/**
 * 管理员信息接口
 * 
 */
export function DeleteItem(data) {
    return service.request({
        method: 'post',
        url: 'boss/delet',
        data: data
    })
}
/**
 * 添加信息
 * 
 */
export function AddItem(data) {
    return service.request({
        method: 'post',
        url: 'boss/add',
        data: data
    })
}
/**
 * 更改信息
 * 
 */
export function UpdateItem(data) {
    return service.request({
        method: 'post',
        url: 'boss/update',
        data: data
    })
}
/**
 * 获取单条信息
 * 
 */
export function GetOneItem(data) {
    return service.request({
        method: 'post',
        url: 'boss/getAdminiById',
        data: data
    })
}