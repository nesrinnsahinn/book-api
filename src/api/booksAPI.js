// src/api/booksAPI.js

export async function fetchHomepageBooks() {
    try {
      const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=relevance&printType=books&maxResults=10');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const booksWithCovers = data.items.map(item => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors || ['Unknown Author'],
        cover_url: `https://books.google.com/books/content?id=${item.id}&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api`,
        pageCount: item.volumeInfo.pageCount,
        publisher: item.volumeInfo.publisher,
        publishedDate: item.volumeInfo.publishedDate
      }));
      return booksWithCovers;
    } catch (error) {
      console.error('There was a problem fetching the books:', error);
      return [];
    }
  }
  

  export async function searchBooks(query) {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=10`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const booksWithCovers = data.items.map(item => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors || ['Unknown Author'],
        cover_url: `https://books.google.com/books/content?id=${item.id}&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api`,
        pageCount: item.volumeInfo.pageCount,
        publisher: item.volumeInfo.publisher,
        publishedDate: item.volumeInfo.publishedDate
      }));
      return booksWithCovers;
    } catch (error) {
      console.error('There was a problem with the search:', error);
      return [];
    }
  }
export async function fetchBookDetails(bookId) {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const item = await response.json();
        const bookDetails = {
            id: item.id,
            key: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors || ['Unknown Author'],
            cover_url: `https://books.google.com/books/content?id=${item.id}&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api`,
            thumbnail_url: (item.volumeInfo.imageLinks?.thumbnail || item.volumeInfo.imageLinks?.medium || item.volumeInfo.imageLinks?.large || item.volumeInfo.imageLinks?.extraLarge).replace('&source=gbs_api', '') || 'https://via.placeholder.com/150',
            pageCount: item.volumeInfo.pageCount,
            publisher: item.volumeInfo.publisher,
            publishedDate: item.volumeInfo.publishedDate,
            description: item.volumeInfo.description || "No description available.",
            categories: item.volumeInfo.categories || []
        };
        return bookDetails;
    } catch (error) {
        console.error('There was a problem fetching the book details:', error);
        return null;
    }
}

  