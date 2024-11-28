import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const[visible,setVisible]=useState(false)
const location=useLocation();
useEffect(()=>{
if (location.pathname.includes('collection')) {
    setVisible(true);

    
}
else{
    setVisible(false)
}
},[location])
  return showSearch && visible ? (
    <div className="flex items-center justify-center bg-gray-50 py-4 border-t border-b">
      {/* Search Input Wrapper */}
      <div className="flex items-center border border-gray-400 px-4 py-2 rounded-full w-full max-w-lg">
        <input
          className="flex-1 bg-transparent text-sm outline-none"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
        <img className="w-4 ml-2" src={assets.search_icon} alt="search-icon" />
      </div>
      {/* Close Icon */}
      <img
        onClick={() => setShowSearch(false)}
        className="w-5 ml-4 cursor-pointer"
        src={assets.cross_icon}
        alt="close-icon"
      />
    </div>
  ) : null;
};

export default SearchBar;
