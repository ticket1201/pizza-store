import React from 'react';
import {addToCart, CardProductType, removeFromCart} from '../cartReducer';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useAppDispatch} from '../../../utils/hooks';
import IconButton from '@mui/material/IconButton';
import s from '../Cart.module.css'

type propsType = {
    item: CardProductType
}

const CartItem = (props: propsType) => {
    const {id, name, description, count, photo} = props.item
    const dispatch = useAppDispatch()

    const imageStyle = {
        height: '70px',
        width: '150px',
        backgroundImage:`url(${photo})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        flexShrink: 0
    }

    const increaseHandler = () => {
        dispatch(addToCart(props.item))
    }

    const decreaseHandler = () => {
        dispatch(removeFromCart({id}))
    }

    return (
        <div className={s.cartItem}>
            <div style={imageStyle}>
            </div>
            <div className={s.textWrapper}>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className={s.buttonWrapper}>
                <IconButton onClick={decreaseHandler}>
                    <RemoveCircleOutlineIcon/>
                </IconButton>
                <p>{count}</p>
                <IconButton onClick={increaseHandler}>
                    <AddCircleOutlineIcon/>
                </IconButton>
            </div>
        </div>
    );
};

export default CartItem;