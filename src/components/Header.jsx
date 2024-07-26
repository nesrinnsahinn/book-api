import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logoSvg from '../assets/booklogo.png';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <nav className="fixed top-0 z-50 w-full bg-black text-white px-2 md:px-5 gap-4 lg:px-10 py-3 lg:pl-3 flex items-center justify-between flex-wrap">
            <Link to="/" ><img src={logoSvg} style={{ width: '130px', height: 'auto' }} className="text-white mr-2" alt="Kitap Logo" /></Link>
            <div className="flex flex-1">
                <input
                    type="text"
                    placeholder="Kitap ara..."
                    className="form-input min-w-[100px] w-full max-w-xs px-1 py-1 border rounded-lg shadow-sm text-gray-700 bg-white border-gray-100 focus:border-gray-200 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button 
                    className="btn ml-2 px-3 py-1 font-thin border-current bg-black text-white rounded-lg shadow-lg focus:outline-none focus:ring-1 focus:ring-gray-300 focus:ring-opacity-50 transition-colors duration-200"
                    onClick={handleSearch}
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div className="flex justify-end items-center font-thin">
                <Link to="/" className="text-white text- mr-11 hover:text-gray-300">Anasayfa</Link>
                <Link to="/cart" className="text-white hover:text-gray-300 mr-3 flex flex-nowrap items-center">Sepetim<i className="fas fa-cart-shopping text-yellow-500 ml-2"></i></Link>
            </div>
        </nav>
    );
};

export default Header;
