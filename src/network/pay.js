import {request} from "./request";

export function getErWeiMa(orderId) {
    return request({
        url: 'pay/orderId',
        params:{
             orderId
        }
    })
}