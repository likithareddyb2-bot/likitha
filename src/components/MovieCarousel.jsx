import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MovieCarousel = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth * 0.8 : current.offsetWidth * 0.8;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!movies || movies.length === 0) return null;

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 relative animate-fade-in group">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-3xl font-bold font-outfit text-white tracking-wide flex items-center gap-3">
          <span className="w-2 h-8 bg-primary-500 rounded-full inline-block animate-pulse"></span>
          {title}
        </h2>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:border-primary-400 text-white transition-all backdrop-blur-md hidden md:block"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:border-primary-400 text-white transition-all backdrop-blur-md hidden md:block"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Horizontal Scrolling Track */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar pb-8 pt-4 -mx-6 px-6 scroll-smooth"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      
      {/* Edge Gradients for smooth fade out */}
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-dark-900 to-transparent pointer-events-none hidden md:block" />
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-dark-900 to-transparent pointer-events-none hidden md:block" />
    </div>
  );
};

export default MovieCarousel;
