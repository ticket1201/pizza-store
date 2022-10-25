import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {productsApi, ProductType} from '../../api/api';
import {cartFormInputs,} from './CartForm/CartForm';
import {RootStateType} from '../../app/store';

let initialState:cartStateType = {
    products: [],
    totalPrice: 0
}

export const sendOrder = createAsyncThunk('cart/sendOrder', async (personInfo:cartFormInputs,{dispatch, rejectWithValue, getState}) =>{
    const state = getState() as RootStateType;
    let res = await productsApi.putOrder({...personInfo, products: state.cart.products})
    if(res.status === 200){
        dispatch(clearCart())
        return true
    }
})


const slice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state, action: PayloadAction<ProductType>){
            let item = state.products.find(el => el.id === action.payload.id)
            state.totalPrice += action.payload.price
            if(item){
                item.count += 1
            }else {
                state.products.push({...action.payload, count: 1})
            }
        },
        removeFromCart(state, action: PayloadAction<{id:number}>){
            let itemIndex = state.products.findIndex(el => el.id === action.payload.id)
            let productInState = state.products[itemIndex]
            state.totalPrice -= productInState.price
            if(productInState.count === 1){
                state.products.splice(itemIndex, 1)
            }else {
                productInState.count -= 1
            }
        },
        clearCart(state){
            state.products = []
            state.totalPrice = 0
        }
    }
})



export const cartReducer = slice.reducer
export const {addToCart, removeFromCart, clearCart} = slice.actions

export type CartActions =
    | ReturnType<typeof addToCart>
    | ReturnType<typeof removeFromCart>

export type cartStateType = {
    products: Array<CardProductType>
    totalPrice: number
}

export type CardProductType = ProductType & {count: number}