/**@ts-ignore */

export const imagesApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
    timeout: 10000
})

export const weatherApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
    timeout: 10000
})

export const todoApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/foster/todos',
    timeout: 10000
})