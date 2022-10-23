import React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import LocalPizzaRoundedIcon from '@mui/icons-material/LocalPizzaRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useAppSelector} from '../../utils/hooks';
import {useNavigate} from 'react-router-dom';

const Appbar = () => {

    const totalPrice = useAppSelector(state => state.cart.totalPrice)
    const navigate = useNavigate()
    const handleCartClick = () => {
        navigate('/cart')
    }
    const handleLogoClick = () => {
        navigate('/')
    }

    return (
        <AppBar position={'fixed'}
                color={'default'}>
            <div className={'headerInner'}>
                <IconButton onClick={handleLogoClick}>
                    <LocalPizzaRoundedIcon fontSize={'large'}/>
                </IconButton>
                <IconButton sx={{width: 'fit-content', position: 'relative'}} onClick={handleCartClick}>
                    <ShoppingCartOutlinedIcon/>
                    {totalPrice && totalPrice + ' $ '}
                </IconButton>
            </div>
        </AppBar>
    );
};

export default Appbar;