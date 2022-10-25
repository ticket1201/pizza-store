import axios from 'axios';
import {cartFormInputs} from '../feature/Cart/CartForm/CartForm';
import {CardProductType} from '../feature/Cart/cartReducer';

export type ProductType = {
    id: number
    description: string
    name: string
    photo: string
    price: number
}

type OrderData = cartFormInputs & {products: CardProductType[]}

const instance = axios.create({
    baseURL: 'https://first-back-express-production.up.railway.app/',
});


export const productsApi = {
    fetchProducts() {
        return instance.get<ProductType[]>('products')
    },
    putOrder(data:OrderData){
        return instance.post('/order',data)
    }
}