import { useWatchlist } from "../../store/watchListStore";

export default function HeadingContent({
  // use default props with placeholder
  id,
  image_path = "",
  title = "",
  rating = 0,
  release_date = "",
  duration = "",
  genre = "",
  age_rating = "",
  backdrop_path = "",
}) {
  const { movies, addMovie, removeMovie } = useWatchlist((state) => state);

  const watchlistHandler = () => {
    // if the movie is already in the watchlist, show alert and return
    if (movies.some((movie) => movie.id === id)) {
      confirm(
        "Movie sudah ada di watchlist. Apakah Anda ingin menghapusnya?",
      ) && removeMovie(id);
      return;
    }
    addMovie({
      id: id,
      title: title,
      rating: rating,
      release_date: release_date,
      duration: duration,
      genre: genre,
      age_rating: age_rating,
      image_path: image_path,
    });
  };

  return (
    <div className="heading-content relative">
      {/* Hero Background */}
      <div className="hero-background">
        {/* this background have gradient overlay black from bottom to top but black in top is black with 50% opacity */}
        <div className="gradient-overlay absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-black to-[rgba(0,0,0,0.5)]"></div>
        <img
          src={
            backdrop_path ||
            "https://via.placeholder.com/1400x380?text=No+Image"
          }
          alt="Title here"
          className="w-full h-95 object-cover object-center"
        />
      </div>

      {/* Movie Detail */}
      <div className="movie-detail-heading absolute -bottom-45 left-0 w-full">
        <div className="wrapper w-full max-w-7xl mx-auto flex items-start">
          {/* Image poster portrait */}
          <div className="image-container w-70 h-105">
            <img
              src={
                image_path ||
                "https://via.placeholder.com/280x480?text=No+Image"
              }
              alt={title || "Loading..."}
              className="w-full h-full rounded-xl object-cover border-2 border-[#3A4049]"
            />
          </div>

          {/* Movie Title and CTA */}
          <div className="movie-title-cta ml-8 pt-7.5">
            {/* badge */}
            {/* <span className="bg-[#FF50502E] border border-[rgba(255, 80, 80, 0.18)] text-sm font-bold px-2 py-1 rounded text-[#FF8080] text-">
              FEATURED · #1 THIS WEEK
            </span> */}
            {/* title */}
            <h1 className="text-[56px] mt-0.5 mb-3.5 font-bebas font-normal">
              {title || "Loading..."}
            </h1>
            {/* rating, year,duration, genre, age */}
            <div className="flex items-center gap-x-4 mt-3">
              <div className="rating-badge">
                <span className="text-sm font-bold bg-[#FBBF2426] px-2 py-1.5 rounded-sm text-[#FBBF24]">
                  ★ {rating} / 10
                </span>
              </div>
              <span className="text-sm text-[#A9A9A9]">
                {release_date} · {duration} · {genre} · {age_rating}
              </span>
            </div>

            {/* CTA (Watch Trailer, Add to Watchlist, Like) */}
            <div className="cta-buttons flex items-center gap-x-4 mt-7.25">
              <button className="bg-[#FF8000] py-3.25 px-7 rounded-lg text-black font-bold text-sm hover:bg-[#ff8000cc] transition duration-300 cursor-pointer">
                ▶ Tonton Trailer
              </button>
              <button
                onClick={() => {
                  watchlistHandler();
                }}
                className={`${movies.some((movie) => movie.id === id) ? "bg-[#FF5050]" : "bg-[#3A4049]"} py-3.25 px-7 rounded-lg text-white font-bold text-sm ${movies.some((movie) => movie.id === id) ? "hover:bg-[#ff5050cc]" : "hover:bg-[#3a4049cc]"} transition duration-300 cursor-pointer`}
              >
                {
                  // if the movie is already in the watchlist, show "Remove from Watchlist" instead of "Add to Watchlist"
                  movies.some((movie) => movie.id === id)
                    ? "Hapus dari Watchlist"
                    : "Tambah ke Watchlist"
                }
              </button>
              {/* <button className="bg-[#3A4049] py-3.25 px-7 rounded-lg text-white font-bold text-sm hover:bg-[#3a4049cc] transition duration-300 cursor-pointer">
                ♡ Like
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
