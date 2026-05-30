import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
// import Trending from "../components/Trending";
// import Footer from "../components/Footer";

export default function Discover() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      // Replace this with your actual API call
      const response = await fetch("/api/movies");
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Simulate an API call to fetch movies

    fetchMovies();
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
              type="search"
              required
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <p className="text-sm text-gray-500">
            Ditemukan <span className="font-bold text-orange-400">12 film</span>{" "}
            untuk "Inception"
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
          <ul className="movie-grid flex flex-wrap gap-6">
            {/* <!-- Movie card --> */}
            <MovieCard
              movie={{
                id: 1,
                title: "Inception",
                genre: ["Sci-Fi", "Action"],
                year: 2010,
                rating: 8.8,
                favorite: true,
                image: "https://dummyimage.com/300x450/000/fff&text=Inception",
              }}
            />
          </ul>
        </section>
      </main>
    </>
  );
}
