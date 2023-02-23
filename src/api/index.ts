import { Request } from '../utils/request'

const request = Request

 export function login(data: any) {
    return  new request({
        url: '/admin/login',
        data,
        method: "Post",
    })
}

// export const get = (data: any) => {
//     return Request.post('/admin/login', {

//     })
// }