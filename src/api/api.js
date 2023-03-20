import request from '../utils/request'
export default {
    getMenuList(params) {
        return request({
            url: "/menu/list",
            method: "get",
            data: params,
            mock: true
        })
    },
}