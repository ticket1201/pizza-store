import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {productsApi, ProductType} from '../../api/api';
import {changeAppStatus} from '../../app/appReducer';

let initialState = {} as initialStateType

const slice = createSlice({
    name: 'products',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            state.products = action.payload
        })
    }
})

export const fetchProducts = createAsyncThunk('app/initialize', async (param, {dispatch,rejectWithValue}) => {
    try{
        let {data} = await productsApi.fetchProducts()
        dispatch(changeAppStatus({status: 'idle'}))
        return data
    }
    catch (e) {
        console.log('network error')
        return rejectWithValue(null)
    }
})

export const productsReducer = slice.reducer

type initialStateType = {
    products: ProductType[]
}