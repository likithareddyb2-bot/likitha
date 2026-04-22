import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="relative w-full max-w-2xl mx-auto group animate-slide-up"
      style={{ animationDelay: '0.4s' }}
    >
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-white/50 group-focus-within:text-primary-400 transition-colors">
        <Search size={22} className="drop-shadow-md" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="block w-full p-5 pl-12 text-lg font-outfit text-white bg-white/10 backdrop-blur-xl border border-white/20 rounded-full focus:ring-4 focus:ring-primary-500/30 focus:border-primary-400/50 focus:outline-none placeholder-white/40 shadow-xl transition-all duration-300"
        placeholder="Discover movies, actors, genres..."
        required
      />
      <button
        type="submit"
        className="text-white absolute right-2.5 bottom-2.5 bg-primary-500 hover:bg-primary-400 focus:ring-4 focus:outline-none focus:ring-primary-500/30 font-medium rounded-full text-base px-6 py-2.5 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:shadow-[0_0_25px_rgba(99,102,241,0.8)]"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
