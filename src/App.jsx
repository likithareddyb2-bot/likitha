import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import MovieCarousel from './components/MovieCarousel';
import { getTrendingMovies, searchMovies } from './services/tmdb';

function App() {
  const [trending, setTrending] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch initial data
    const loadData = async () => {
      setLoading(true);
      const data = await getTrendingMovies();
      setTrending(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }
    
    setIsSearching(true);
    setLoading(true);
    const results = await searchMovies(query);
    setSearchResults(results);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-dark-900 overflow-hidden font-sans">
      
      {/* Dynamic Hero Section */}
      <Hero 
        featuredMovie={trending.length > 0 ? trending[0] : null} 
        onSearch={handleSearch} 
      />

      <main className="relative z-10 -mt-20 pb-20">
        {loading ? (
          <div className="w-full flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : isSearching ? (
          <MovieCarousel title="Search Results" movies={searchResults} />
        ) : (
          <MovieCarousel title="Trending This Week" movies={trending.slice(1)} />
        )}
      </main>

    </div>
  );
}

export default App;
