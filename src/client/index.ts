const BASE_URL = 'http://localhost:3100/api'

export type ResponseData = { timestamp: number; value: number }[]

export const getData = async (): Promise<ResponseData> => {
    const response = await fetch(BASE_URL + '/data')
    const data = await response.json()
    return data
}