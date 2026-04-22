// Mock TMDB logic to simulate API calls until an API Key is available
const API_KEY = "dummy_key";
const BASE_URL = "https://api.themoviedb.org/3";

const MOCK_TRENDING = [
  {
    id: 1,
    title: "Dune: Part Two",
    overview: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    poster_path: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2JGjjc9CW.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/8rpDcsfLJypbO6vtec0DsyzNX3L.jpg",
    release_date: "2024-02-27",
    vote_average: 8.8,
  },
  {
    id: 2,
    title: "Oppenheimer",
    overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    poster_path: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBRoOoA0i.jpg",
    release_date: "2023-07-19",
    vote_average: 8.2,
  },
  {
    id: 3,
    title: "Blade Runner 2049",
    overview: "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos.",
    poster_path: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/ilRyazdflIgEqbxiVs0ofzEusAv.jpg",
    release_date: "2017-10-04",
    vote_average: 8.1,
  },
  {
    id: 4,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster_path: "https://image.tmdb.org/t/p/w500/gEU2QlsEWeepqI84Le8Z0wKChf.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/pbrkL804c8yAv3zBZR3A81s5rvR.jpg",
    release_date: "2014-11-05",
    vote_average: 8.6,
  },
  {
    id: 5,
    title: "The Batman",
    overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    poster_path: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/b0PlSNi81NA0Z4G2hN7T2zRIV0.jpg",
    release_date: "2022-03-01",
    vote_average: 8.4,
  }
];

export const getTrendingMovies = async () => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_TRENDING);
    }, 800);
  });
};

export const searchMovies = async (query) => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!query) return resolve(MOCK_TRENDING);
      
      const results = MOCK_TRENDING.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) || 
        movie.overview.toLowerCase().includes(query.toLowerCase())
      );
      resolve(results);
    }, 600);
  });
};
