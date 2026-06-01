import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import ErrorBoundary from "../components/ErrorBoundary";
// import Trending from "../components/Trending";
// import Footer from "../components/Footer";

// import url and key from .env
const TMDB_BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export default function Discover() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`,
        {
          headers: {
            Authorization: `Bearer ${TMDB_TOKEN}`,
          },
        },
      );
      const data = await response.json();
      setMovies(data.results || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchMovies();
    } else {
      // KETIKA KATA KUNCI DIHAPUS:
      setMovies([]); // Mengosongkan data film sehingga movies.length menjadi 0
    }
  }, [query]);

  return (
    <>
      <Navbar activePage="discover" />
      <main className="main-content pt-18">
        <header className="section-header flex  justify-between items-center py-4 px-8">
          <h2 className="text-2xl font-bebas">DISCOVER FILMS</h2>
        </header>
        <section className="search-section flex flex-col gap-y-4 py-4 px-8">
          <label className="input w-full">
            <svg
              className="h-[1em] opacity-80 text-orange-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              required
              placeholder="Search"
              value={query}
            />
          </label>
          <p className="text-sm text-gray-500">
            Ditemukan{" "}
            <span className="font-bold text-orange-400">{movies.length}</span>{" "}
            film untuk {query || "No query"}.
          </p>
        </section>
        <section className="filter-section flex items-center gap-x-2 py-4 px-8">
          <button className="btn btn-sm py-2 px-4 rounded-full bg-amber-500 text-zinc-900">
            Semua
          </button>
          <button className="btn btn-sm py-2 px-4 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-100">
            Series
          </button>
          <button className="btn btn-sm py-2 px-4 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-100">
            Films
          </button>
        </section>
        <section className="sort-section flex items-center gap-x-2 py-4 px-8">
          <div className="movie-grid flex flex-wrap gap-6">
            {/* <!-- Movie card --> */}
            <ErrorBoundary>
              {loading ? (
                <p>Loading...</p>
              ) : movies.length > 0 ? (
                <>
                  {movies.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      title={movie.title}
                      genre={movie.genre_ids} // You may want to map genre_ids to actual genre names
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
                  ))}
                </>
              ) : (
                <p>No movies found.</p>
              )}
            </ErrorBoundary>
          </div>
        </section>
      </main>
    </>
  );
}
