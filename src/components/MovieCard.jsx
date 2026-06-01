import { useState } from "react";
["cite", 150];

function Moviecard({ title, genre, year, rating, image, favorite = false }) {
  // State untuk melacak status favorit
  const [isFavorite, setIsFavorite] = useState(favorite);

  return (
    <div className="movie-card w-48 group">
      {/* Container Poster */}
      <figure className="movie-poster relative bg-slate-800 rounded-2xl overflow-hidden aspect-2/3 shadow-xl border border-slate-700/50">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400 text-xs">No Image</span>
          </div>
        )}

        {/* Overlay Atas: Kategori & Tombol Favorit */}
        <div className="category-favorite flex items-center justify-between gap-x-2 absolute top-0 left-0 w-full p-3 bg-linear-to-b from-black/70 to-transparent">
          <div className="category font-semibold text-[10px] uppercase tracking-wider bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-md max-w-[65%] truncate">
            {genre && genre[0] ? genre[0] : "N/A"}
          </div>

          {/* Tombol Favorit */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="bg-black/40 backdrop-blur-sm w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/60 hover:scale-110 transition duration-200 active:scale-95 border border-white/10"
            aria-label="Add to favorite"
          >
            <span
              className="material-symbols-rounded text-orange-500 text-xl transition-all"
              style={{
                fontVariationSettings: isFavorite
                  ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                  : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              }}
            >
              favorite
            </span>
          </button>
        </div>
      </figure>

      {/* Info Film di Bawah Poster */}
      <div className="movie-title flex justify-between items-start mt-3 px-1">
        <div className="movie-info flex flex-col gap-y-0.5 min-w-0 flex-1 pr-2">
          <span
            className="movie-title text-sm font-semibold text-white truncate"
            title={title}
          >
            {title}
          </span>
          <span className="movie-year text-xs text-gray-400">{year}</span>
        </div>

        {/* Rating */}
        <div className="rating flex items-center gap-x-1 shrink-0 mt-0.5 bg-transparent">
          <span className="text-yellow-400 text-xs font-bold">★</span>
          <span className="text-white text-xs font-bold">
            {rating ? rating.toFixed(1) : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Moviecard;
