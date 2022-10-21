import React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Appbar = () => {
/*
    const cartItemsCount = useAppSelector()
*/

    return (
        <AppBar position={'static'} sx={{alignItems: 'flex-end'}} color={'default'}>
            <IconButton sx={{width: '40px', position:'relative'}}>
                <ShoppingCartOutlinedIcon/>
            </IconButton>
        </AppBar>
    );
};

export default Appbar;