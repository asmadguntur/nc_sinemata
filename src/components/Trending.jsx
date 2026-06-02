import { useEffect, useState } from "react";
import Moviecard from "./Moviecard";

// Import url and key from .env
const TMDB_BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

function Trending() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch trending movies from TMDB API
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(`${TMDB_BASE_URL}/trending/movie/day`, {
          headers: {
            Authorization: `Bearer ${TMDB_TOKEN}`,
          },
        });
        const data = await response.json();
        setTrendingMovies(data.results || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);
  return (
    <section className="trending-section">
      {/* <!-- Section Header --> */}
      <header className="section-header flex  justify-between items-center py-4 px-8">
        {/* <!-- heading --> */}
        <h2 className="text-2xl font-bold">Trending Now</h2>
        {/* <!-- list to all items --> */}
        <a href="#" className="text-sm text-gray-500 hover:text-gray-200">
          Lihat Semua &#8594;
        </a>
      </header>

      {/* <!-- Trending Content --> */}
      <div className="trending-container">
        {/* <!-- Movie List --> */}
        <div
          id="movie-trending-list"
          className="trending-list flex flex-wrap gap-6 overflow-x-auto px-8 py-4 max-w-full "
        >
          {/* <!-- Movie card --> */}
          {loading ? (
            <p>Loading trending movies...</p>
          ) : trendingMovies.length > 0 ? (
            trendingMovies.map((movie, index) => {
              if (index >= 6) return null; // Batasi hanya menampilkan 6 movie pertama
              return (
                <Moviecard
                  key={movie.id}
                  title={movie.title}
                  genre={movie.genre_ids || []}
                  year={
                    movie.release_date
                      ? new Date(movie.release_date).getFullYear()
                      : "N/A"
                  }
                  rating={movie.vote_average}
                  favorite={false}
                  image={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : null
                  }
                />
              );
            })
          ) : (
            <p>No trending movies available.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Trending;
