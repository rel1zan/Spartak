import {$host, $authHost} from "./index";

export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', {category})
    return data
}

export const fetchCategory = async () => {
    const {data} = await $host.get('api/category')
    return data
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', {product})
    return data
}

export const fetchProduct = async () => {
    const {data} = await $host.get('api/product')
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}
