import React from 'react';
import './App.css';
import Appbar from '../components/Appbar/Appbar';
import ProductsList from '../feature/PizzaList/ProductsList';
import {useAppSelector} from '../utils/hooks';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import {Route, Routes} from 'react-router-dom';
import Cart from '../feature/Cart/Cart';
import Success from '../components/Success/Success';


function App() {
    const isInitialized = useAppSelector(state => state.app.isInitialized)

    if (!isInitialized) {
        return <LoadingScreen isDarken={false}/>
    }

    return (
        <div className="App">
            <Appbar/>
            <Routes>
                <Route path={'/'} element={<ProductsList/>}/>
                <Route path={'/cart'} element={<Cart/>}/>
                <Route path={'/success'} element={<Success/>}/>
            </Routes>
        </div>
    );
}

export default App;
