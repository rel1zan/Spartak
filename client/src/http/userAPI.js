import {$host, $authHost} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (name_org, person_org, address_org, phone_org, password) => {
    const {data} = await $host.post('api/user/registration', {name_org, person_org, address_org, phone_org, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)

}

export const login = async (phone_org, password) => {
    const {data} = await $host.post('api/user/login', { phone_org, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}