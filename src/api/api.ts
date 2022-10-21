import axios from 'axios';

export type ProductType = {
    id: number
    description: string
    name: string
    photo: string
    price: number
}

const instance = axios.create({
    baseURL: 'https://firstbackapp.herokuapp.com/',
});


export const productsApi = {
    fetchProducts() {
        return instance.get<ProductType[]>('products')
    }
}