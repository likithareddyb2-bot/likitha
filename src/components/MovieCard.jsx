import React from 'react';
import { Star, Calendar } from 'lucide-react';

const MovieCard = ({ movie }) => {
  const imageUrl = movie.poster_path; // In a real app we might prepend the TMDB base URL here

  return (
    <div className="relative group w-64 flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl animate-fade-in glass-card">
      {/* Movie Poster */}
      <div className="aspect-[2/3] w-full relative">
        <img 
          src={imageUrl} 
          alt={movie.title} 
          className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Dark Vignette Overlay on the image to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      </div>

      {/* Floating Info Section */}
      <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold font-outfit text-white mb-2 line-clamp-1">{movie.title}</h3>
        
        <div className="flex items-center gap-3 text-sm text-gray-300 font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          <div className="flex items-center gap-1 text-yellow-400 font-medium">
            <Star size={14} className="fill-yellow-400" />
            <span>{movie.vote_average.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{movie.release_date?.substring(0,4)}</span>
          </div>
        </div>

        {/* Hover Overview */}
        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 h-0 group-hover:h-auto overflow-hidden">
          <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed">
            {movie.overview}
          </p>
        </div>
      </div>

      {/* Glass Pane Hover Effect Overlay */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/50 rounded-2xl pointer-events-none transition-colors duration-300" />
    </div>
  );
};

export default MovieCard;
