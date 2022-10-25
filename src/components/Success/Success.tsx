import React from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate()
    return (
        <div className={'wrapper'}>
            <h1>You successfully ordered your pizza. Please, wait for confirmation call.</h1>
            <Button variant={'contained'} onClick={() => {
                navigate('/')
            }}>Back to Pizza</Button>
        </div>
    );
};

export default Success;