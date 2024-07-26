import React from 'react';
import { useSelector } from 'react-redux';
import SepetCard from '../components/SepetCard';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.addedItems);

    return (
        <div className="container mx-auto mt-24 md:mt-12 p-4 md:p-8 lg:p-12 text-white">
            {
                cartItems.length > 0 ?
                    <div className='flex flex-col'>
                        {
                            cartItems.map((book, index) => (
                                <SepetCard key={book.id || index} book={book} />
                            ))
                        }
                        <div className="mt-4">
                            <span className="text-xl">
                                TOPLAM FİYAT: {cartItems.reduce((total, item) => total + (item.count * item.price), 0)}₺
                            </span>
                        </div>
                        <Link to="/payment">
                            <button
                                className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4'
                            >
                                Ödeme sayfasına git →
                            </button>
                        </Link>
                    </div>
                : <p>Sepetinizde ürün yok.</p>
            }
        </div>
    );
};

export default Cart;
