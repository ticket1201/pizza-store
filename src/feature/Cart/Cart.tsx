import React from 'react';
import {useAppSelector} from '../../utils/hooks';
import CartItem from './CartItem/CartItem';
import s from './Cart.module.css'
import CartForm from './CartForm/CartForm';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';


const Cart = () => {
    const products = useAppSelector(state => state.cart.products)
    const totalPrice = useAppSelector(state => state.cart.totalPrice)
    const navigate = useNavigate()

    if (!products.length) {
        return (
            <div className={`${s.cartWrapper} wrapper`}>
                <div>
                    <h3>Cart is empty</h3>
                    <Button onClick={() => {
                        navigate('/')
                    }}>Back to Pizza</Button>
                </div>
            </div>
        )
    }

    return (
        <div className={`${s.cartWrapper} wrapper`}>
            <div className={s.cartsList}>
                {products.length
                    ? products.map(el => {
                        return (
                            <div key={el.id}>
                                <CartItem item={el}/>
                            </div>
                        )
                    })
                    : <p>Cart is empty</p>
                }
                <h3 className={s.total}>Total price: {totalPrice} $</h3>
            </div>
            <CartForm/>
        </div>
    );
};

export default Cart;