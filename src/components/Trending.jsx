import Moviecard from "./Moviecard";

const trendingMovies = [
  {
    id: 1,
    title: "Chronos Letterbound",
    genre: ["Sci-Fi", "Drama"],
    year: 2024,
    rating: 8.7,
    favorite: true,
    image: "https://dummyimage.com/300x450/7b2cbf/ffffff&text=Chronos",
  },
  {
    id: 2,
    title: "Embersea Vigil",
    genre: ["Drama"],
    year: 2024,
    rating: 8.1,
    favorite: true,
    image: "https://dummyimage.com/300x450/2a9d8f/ffffff&text=Embersea",
  },
  {
    id: 3,
    title: "Riptide Hours",
    genre: ["Sci-Fi", "Drama"],
    year: 2024,
    rating: 8.5,
    favorite: false,
    image: "https://dummyimage.com/300x450/e63946/ffffff&text=Riptide",
  },
  {
    id: 4,
    title: "Vesper Quiet",
    genre: ["Sci-Fi", "Drama"],
    year: 2024,
    rating: 8.7,
    favorite: false,
    image: "https://dummyimage.com/300x450/f4a261/ffffff&text=Vesper",
  },
  {
    id: 5,
    title: "Nephele Drift",
    genre: ["Sci-Fi", "Drama"],
    year: 2024,
    rating: 9,
    favorite: true,
    image: "https://dummyimage.com/300x450/457b9d/ffffff&text=Nephele",
  },
  {
    id: 6,
    title: "Obsidian Lullaby",
    genre: ["Sci-Fi", "Drama"],
    year: 2024,
    rating: 8.7,
    favorite: false,
    image: "https://dummyimage.com/300x450/6c757d/ffffff&text=Obsidian",
  },
  {
    id: 7,
    title: "Aurora Veil",
    genre: ["Fantasy", "Adventure"],
    year: 2023,
    rating: 8.5,
    favorite: true,
    image: "https://dummyimage.com/300x450/8338ec/ffffff&text=Aurora",
  },
  {
    id: 8,
    title: "Solaris Echo",
    genre: ["Sci-Fi"],
    year: 2022,
    rating: 8.3,
    favorite: false,
    image: "https://dummyimage.com/300x450/f77f00/ffffff&text=Solaris",
  },
  {
    id: 9,
    title: "Velvet Horizon",
    genre: ["Romance", "Drama"],
    year: 2021,
    rating: 8.1,
    favorite: true,
    image: "https://dummyimage.com/300x450/d62828/ffffff&text=Velvet",
  },
  {
    id: 10,
    title: "Midnight Pulse",
    genre: ["Thriller", "Mystery"],
    year: 2024,
    rating: 8.9,
    favorite: false,
    image: "https://dummyimage.com/300x450/1d3557/ffffff&text=Midnight",
  },
];

function Trending() {
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
          {trendingMovies.map((movie, index) => {
            if (index >= 6) return null; // Batasi hanya menampilkan 5 movie pertama
            return <Moviecard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Trending;
