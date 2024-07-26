import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchBooks } from '../api/booksAPI';
import Card from '../components/Card';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BookSearch = () => {
  const query = useQuery();
  const searchQuery = query.get('query');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const results = await searchBooks(searchQuery);
      setBooks(results);
      setLoading(false);
    };
    fetchSearchResults();
  }, [searchQuery]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Search Results for "{searchQuery}"</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <Card key={book.key} book={book} addToCart={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
