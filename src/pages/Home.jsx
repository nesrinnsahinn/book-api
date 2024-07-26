import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { fetchHomepageBooks } from '../api/booksAPI';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [featuredBook, setFeaturedBook] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      const data = await fetchHomepageBooks();
      setBooks(data);
      if (data && data.length > 3) {
        setFeaturedBook(data[3]);
      }
      setLoading(false); 
    };
    getBooks();
  }, []);

  const addToCart = (bookId) => {
    setCart([...cart, bookId]);
  };

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div>
      {featuredBook && (
        <div className="relative w-full h-screen bg-gradient-to-r">
          <img 
            src={featuredBook.cover_url} 
            alt={featuredBook.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-10">
            <h1 className="text-6xl font-bold text-white mb-4">{featuredBook.title}</h1>
            <p className="text-2xl text-gray-300 mb-6">{featuredBook.authors.join(", ")}</p>
          </div>
        </div>
      )}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">More Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map(book => (
            <Card key={book.id} book={book} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
