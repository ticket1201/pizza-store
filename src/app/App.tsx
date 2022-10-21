import React from 'react';
import './App.css';
import Appbar from '../components/Appbar/Appbar';
import ProductsList from '../feature/PizzaList/ProductsList';
import {useAppSelector} from '../utils/hooks';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';


function App() {
    const isInitialized = useAppSelector(state => state.app.isInitialized)

    if(!isInitialized){
        return <LoadingScreen isDarken={false}/>
    }

    return (
        <div className="App">
            <Appbar/>
            <div className={'ProductsWrapper'}>
                <ProductsList/>
            </div>
        </div>
    );
}

export default App;
