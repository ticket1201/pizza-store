import React from 'react';
import {ProductType} from '../../../api/api';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import s from './Pizza.module.css'

type PizzaPropsType = {
    data: ProductType
}

const Pizza = (props:PizzaPropsType) => {
    const {name, photo, price, description} = props.data
    const imageUrl = photo !== 'null' ? photo : 'https://via.placeholder.com/300x130';


    return (
        <Paper sx={{maxWidth:300}}>
            <div className={s.img}><img src={imageUrl} alt={name}/></div>
            <h2 className={s.name}>{name}</h2>
            <div>
                <p>Our price: <span className={s.price}>{price} BYN</span></p>
                <Button color={'primary'} variant={'contained'}>Add to cart</Button>
            </div>
            <p className={s.description}>{description}</p>
        </Paper>
    );
};

export default Pizza;