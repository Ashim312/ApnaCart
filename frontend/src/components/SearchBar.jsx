import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
  const location = useLocation();
  if (location.pathname !== '/collection') return null;

  return showSearch ? (
    <div className='relative border-t border-b border-gray-300/50 bg-white/5 backdrop-blur-sm text-center py-6'>
      <div className='w-full max-w-3xl mx-auto px-4'>
        <div className='inline-flex items-center justify-center w-full bg-white/20 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-colors duration-200 px-4 py-3 rounded-full shadow-sm'>
          <input
            type='text'
            placeholder='Search products...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='flex-1 outline-none bg-transparent text-sm placeholder-gray-700/80 text-gray-900 px-3'
          />
          <button className='flex items-center justify-center w-9 h-9 rounded-full bg-white/30 hover:bg-white/40 transition-colors duration-150'>
            <img className='w-4' src={assets.search_img} alt="Search" />
          </button>
        </div>
      </div>
      <button onClick={() => setShowSearch(false)} className='absolute right-4 top-4 sm:right-6 sm:top-6 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors duration-150' aria-label="Close search">
        <span className='text-lg sm:text-xl font-light'>×</span>
      </button>
    </div>
  ) : null;
}

export default SearchBar
