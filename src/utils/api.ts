import Http from '@/utils/request'

// 定义的接口已经默认导出，可以直接使用
export const demo1 = (params: any) => {
    return Http.get('/util/img-captcha', params)
}
export const demo2 = (params: any) => {
    return Http.post('/api/v1/getName', params)
}