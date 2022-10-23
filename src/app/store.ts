import {combineReducers, configureStore, ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {appActions, appReducer} from './appReducer';
import {productsReducer} from '../feature/PizzaList/productsReducer';
import {CartActions, cartReducer} from '../feature/Cart/cartReducer';

const rootReducer = combineReducers({
    app: appReducer,
    products: productsReducer,
    cart: cartReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type RootActionsType = appActions | CartActions

export type RootStateType = ReturnType<typeof store.getState>
export type RootDispatchType = ThunkDispatch<RootStateType, unknown, RootActionsType>
export type RootThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, RootActionsType>
