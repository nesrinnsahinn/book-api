import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { decreaseBook, increaseBook, removeBook } from '../store/cartReducer';
import { fetchBookDetails } from '../api/booksAPI';

const SepetCard = ({ book }) => {
    const dispatch = useDispatch();
    const [bookData, setBookData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBookDetails = async () => {
            const bookDetails = await fetchBookDetails(book.id);
            setBookData(bookDetails);
            setLoading(false);
        };
        getBookDetails();
    }, []);

    if (loading) return <div className='h-[160px] w-full bg-gray-800 rounded-lg shadow-lg text-white mb-4 flex items-center p-4 text-lg'>Loading...</div>;
    return (
        <div className="flex flex-wrap gap-6 justify-between items-center p-4 mb-4 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 flex-wrap">
                <img
                    src={bookData.thumbnail_url || "https://via.placeholder.com/150"}
                    alt={bookData.title}
                    className="w-24 h-32 object-cover rounded"
                />
                <div>
                    <h3 className="text-xl font-bold">{bookData.title}</h3>
                    <p className="text-sm">Yazar: {bookData.authors}</p>
                    <p className="text-sm">Kategori: {bookData.categories.map(category => {return category.replace('Fiction / ', '')}).join(', ')}</p>
                    <p className="text-sm">Fiyat: {bookData.pageCount}₺</p>
                    <p className="text-sm">Adet: {book.count}</p>
                </div>
            </div>
            <div className="flex gap-3">
                <button
                    onClick={() => dispatch(decreaseBook(book.id))}
                    className="bg-white hover:bg-blue-100 text-black font-bold py-2 px-4 rounded"
                >
                    -
                </button>
                <button
                    onClick={() => dispatch(increaseBook(book.id))}
                    className="bg-white hover:bg-blue-100 text-black font-bold py-2 px-4 rounded"
                >
                    +
                </button>
                <button
                    onClick={() => dispatch(removeBook(book.id))}
                    className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded text-white"
                >
                    Kaldır
                </button>
            </div>
        </div>
    );
};

export default SepetCard;
