import React, {useEffect} from 'react';
import Pizza from './Pizza/Pizza';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import {fetchProducts} from './productsReducer';

const ProductsList = () => {
    const dispatch = useAppDispatch()
    const loadingStatus = useAppSelector(state => state.app.appStatus)
    const products =  useAppSelector(state => state.products.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className={'ProductsWrapper'}>
            {loadingStatus === 'loading' && <LoadingScreen isDarken={true}/>}
            {products && products.map(p => {
                return (
                    <div key={p.id}>
                        <Pizza data={p}/>
                    </div>
                )
            })}
        </div>
    );
};

export default ProductsList;