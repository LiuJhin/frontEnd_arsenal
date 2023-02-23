import Request from '../utils/request'

// const request = Request

 export function login(obj: any) {
    return Request.post('/admin/login',obj)
}

// export const get = (data: any) => {
//     return Request.post('/admin/login', {

//     })
// }