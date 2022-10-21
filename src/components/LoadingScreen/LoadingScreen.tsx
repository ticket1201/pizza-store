import React from 'react';
import {CircularProgress} from '@mui/material';

type PropsType = {
    isDarken: boolean
}

const LoadingScreen = ({isDarken}:PropsType) => {
    return (
        <div style={{
            position: 'absolute',
            top: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: isDarken ? 'rgba(0,0,0, 0.2)' : '',
            zIndex: 2
        }}>
            <CircularProgress/>
        </div>
    );
};

export default LoadingScreen;