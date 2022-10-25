import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {useAppDispatch} from '../../../utils/hooks';
import {sendOrder} from '../cartReducer';
import {useNavigate} from 'react-router-dom';

export type cartFormInputs = {
    name: string,
    surname: string,
    address: string,
    phone: string,
};

const CartForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm<cartFormInputs>({
        defaultValues: {
            name: '',
            surname: '',
            address: '',
            phone: '',
        },
        mode: 'onTouched'
    });
    const onSubmit: SubmitHandler<cartFormInputs> = async (data) => {
      let res = await dispatch(sendOrder(data))
        if(res){
            navigate('/success')
        }
    }
    return (
        <Paper sx={{height: 'fit-content', padding: '15px', boxShadow: `3px 3px 10px 3px #dddddd`, borderRadius:'10px'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Confirmation form</h2>
                <TextField {...register('name', {required: true, pattern: /^([А-ЯЁа-яё]{2,29})|([A-Za-z]{2,29})$/u})} label={'Name'} margin="normal"
                           error={!!errors.name}/>
                <TextField {...register('surname', {required: true, pattern: /^([А-ЯЁа-яё]{2,29})|([A-Za-z]{2,29})$/u})} label={'Surname'} margin="normal"
                           error={!!errors.surname}/>
                <TextField {...register('address', {required: true, pattern:  /^([А-ЯЁа-яё]{3,29})|([A-Za-z]{3,29})$/u})} label={'Address'} margin="normal"
                           error={!!errors.address}/>
                <TextField {...register('phone', {required: true, pattern: /^[+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/})} label={'Phone'} margin="normal"
                           error={!!errors.phone}/>
                <div style={{maxWidth:210, margin: '16px auto'}}>
                    <Button type={'submit'} variant={'contained'} fullWidth>Confirm</Button>
                </div>
            </form>
        </Paper>
    );
};

export default CartForm;