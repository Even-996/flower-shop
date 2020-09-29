import {request} from './request'


export function sendPhone(phone) {
    return request({
        url: 'phone',
        params:{
            phone
        }
    })
}

export function sendPhoneAndCode(phone,code) {
     return request({
         url: 'check',
         params:{
            phone,
             code
         }
     })

}