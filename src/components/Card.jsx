import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/cartReducer';
import { toast } from 'react-toastify';


const Card = ({ book, addToCart }) => {
  const dispatch = useDispatch()
  const placeholderImage = "https://via.placeholder.com/150";
  const coverUrl = book.cover_url || placeholderImage;
  const bookId = book.id || book.key;  


  return (
    <div className="card max-w-xs h-96 rounded-lg overflow-hidden shadow-lg bg-white m-4 transition-transform transform hover:scale-105">
      <img 
        src={coverUrl} 
        alt={book.title} 
        className="w-full h-48 object-cover" 
        onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }} 
      />
      <div className="p-4 h-48 flex flex-col justify-between">
        <div className="mb-4 overflow-hidden flex-grow">
          <div className="font-bold text-xl mb-1 text-gray-900 truncate">{book.title || "Unknown Title"}</div>
          <p className="text-gray-700 text-sm mb-2">
            {book.authors && book.authors.length > 0 ? book.authors.join(", ") : "Unknown Author"}
          </p>
          <div className="text-gray-600 text-xs space-y-1">
            <p>Pages: <span className="font-semibold">{book.pageCount || "N/A"}</span></p>
            <p>Publisher: <span className="font-semibold">{book.publisher || "N/A"}</span></p>
            <p>Published in: <span className="font-semibold">{book.publishedDate || "N/A"}</span></p>
            <p title={book.categories && book.categories.length > 0 ? book.categories.join(", ") : "N/A"}>
              Categories: <span className="font-semibold block overflow-hidden overflow-ellipsis whitespace-nowrap">{book.categories && book.categories.length > 0 ? book.categories.join(", ") : "N/A"}</span>
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-end">
          <Link 
            to={`/book/${bookId}`} 
            className="text-blue-500 hover:underline text-sm"
          >
            Detayları Görüntüle
          </Link>
          <button 
            onClick={() => {
              dispatch(addBook({id: bookId, price: book.pageCount}))
              toast("Kitap sepete eklendi!")
            }} 
            className="bg-blue-500 text-white text-sm px-2 py-1 rounded"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
