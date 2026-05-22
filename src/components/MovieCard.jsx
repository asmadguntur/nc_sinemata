function Moviecard({ movie }) {
  return (
    <li className="movie-card">
      <figure className="movie-poster relative  bg-slate-800 rounded-2xl overflow-hidden w-50 h-96 bg-linear-to-b shadow-xl">
        <div className="category-favorite flex items-center justify-between gap-x-2 absolute top-0 left-0 w-full p-2">
          <div className="category font-bold text-xs">{movie.genre[0]}</div>
          <div className="bg-black/30 w-7 h-7 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/50 transition">
            <span className="material-symbols-rounded text-orange-500 text-sm">
              favorite
            </span>
          </div>
        </div>
      </figure>
      <div className="movie-title flex justify-between items-center mt-2 px-1">
        <div className="movie-info flex flex-col gap-y-1">
          <span className="movie-title text-sm">{movie.title}</span>
          <span className="movie-year text-xs text-gray-500">{movie.year}</span>
        </div>
        <div className="rating flex items-center gap-x-1 self-start">
          <span className="text-yellow-400 text-xs font-bold">★</span>
          <span className="text-yellow-400 text-xs font-bold">
            {movie.rating}
          </span>
        </div>
      </div>
    </li>
  );
}

export default Moviecard;
