import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchBookDetails } from '../api/booksAPI';
import { addBook } from '../store/cartReducer';
import { toast } from 'react-toastify';

const BookDetail = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBookDetails = async () => {
      const bookDetails = await fetchBookDetails(bookId);
      setBook(bookDetails);
      setLoading(false);
    };
    getBookDetails();
  }, [bookId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto pt-28 pb-6">
      <div className="bg-white bg-opacity-75 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg mx-auto p-6">
        <div className="flex space-x-4 flex-wrap lg:flex-nowrap gap-6">
          <img 
            src={book.cover_url || "https://via.placeholder.com/150"} 
            alt={book.title} 
            className="w-32 h-48 object-cover"
          />
          <div className="flex-grow !ml-0">
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-lg text-gray-700">{book.authors.join(", ")}</p>
            <div className="text-gray-600 text-sm space-y-1 mt-2">
              <p>Pages: <span className="font-semibold">{book.pageCount || "N/A"}</span></p>
              <p>Publisher: <span className="font-semibold">{book.publisher || "N/A"}</span></p>
              <p>Published in: <span className="font-semibold">{book.publishedDate || "N/A"}</span></p>
              <p>Categories: <span className="font-semibold">{book.categories.join(", ") || "N/A"}</span></p>
            </div>
            {
              book.description ?
              <p className="text-gray-800 mt-2" dangerouslySetInnerHTML={ { __html: book.description } }></p>
              :
              <p className="text-gray-800 mt-2">No description available.</p>
            }
          </div>
          <button 
            onClick={() => {
              dispatch(addBook({id: book.id, price: book.pageCount}))
              toast("Kitap sepete eklendi!")
            }} 
            className="bg-blue-500 hover:bg-blue-600 text-white text-s px-2 py-1 rounded self-start inline-block whitespace-nowrap !ml-0"
          > Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
