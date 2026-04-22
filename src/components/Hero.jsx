import React from 'react';
import SearchBar from './SearchBar';

const Hero = ({ featuredMovie, onSearch }) => {
  if (!featuredMovie) return null;

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax & Blur */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
        style={{ 
          backgroundImage: `url(${featuredMovie.backdrop_path})`,
        }}
      />
      
      {/* Gradient Overlay for Cinematic Feel */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-dark-900 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center mt-20">
        <h1 className="text-5xl md:text-7xl font-bold font-outfit mb-4 animate-slide-up text-glow tracking-tight">
          {featuredMovie.title}
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-white/80 font-light mb-10 animate-slide-up font-sans leading-relaxed" style={{ animationDelay: '0.2s' }}>
          {featuredMovie.overview}
        </p>

        <div className="w-full">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
