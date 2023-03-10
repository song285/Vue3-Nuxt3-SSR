/**
 * 这只是一个简单的案例，根据实际需求进行更改
 */
import { ElMessage } from 'element-plus'
 
const fetch = (url: string, options?: any): Promise<any>  => {
    // const token = 'CL42EU9fQIqYsejVVn6aMksofnE3hNCZkk_crm64098422c43975.029175561678345250.8037';
    // const headers = { // headers信息
    //     'token' : `${token}`
    // }
    const { public: { baseUrl } } = useRuntimeConfig()
    const reqUrl = baseUrl + url
    return new Promise((resolve, reject) => {
        useFetch(reqUrl, { ...options }).then(({ data }: any) => {
            const value = data.value
            if (!data._rawValue) {
                // 这里处理错误回调
                console.log('40data', data)
                reject(value)
            }else if(data._rawValue.code !== '0'){
                ElMessage({
                    message: data._rawValue.msg,
                    type: 'error',
                })
            } else {
                console.log('40data', data._rawValue)
                resolve(ref(data))
            }
        }).catch((err: any) => {
            console.log('err', err._rawValue)
            reject(err)
        })
    })
}
 
export default new class Http {
 
    get(url: string, params?: any): Promise<any> {
        return fetch(url, { method: 'get', params })
    }
 
    post(url: string, params?: any): Promise<any>  {
        return fetch(url, { method: 'post', params })
    }
 
    put(url: string, body?: any): Promise<any>  {
        return fetch(url, { method: 'put', body })
    }
 
    delete(url: string, body?: any): Promise<any>  {
        return fetch(url, { method: 'delete', body })
    }
}