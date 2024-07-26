import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import BookSearch from './pages/BookSearch';
import Payment from './pages/Payment'
import Cart from './pages/Cart';
import Header from './components/Header';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { overrideBooks } from './store/cartReducer';
import { useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.addedItems);
    useEffect(() => {
        dispatch(overrideBooks(localStorage.getItem('cart')))
    }, [])

    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

   


    return (
        <Router>
            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/book/:bookId" element={<BookDetail />} />
                    <Route path="/search" element={<BookSearch />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/payment" element={<Payment />} />
                </Routes>
                <ToastContainer></ToastContainer>
            </div>
        </Router>
    );
}

export default App;
