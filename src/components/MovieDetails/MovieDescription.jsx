export default function MovieDescription({ synopsis, casts, crews }) {
  return (
    <div className="movie-description w-full max-w-7xl mx-auto mt-60 px-4 flex gap-x-14">
      {/* Sinopsis and Cast */}
      <div className="sinopsis-cast max-w-180.25">
        <div className="sinopsis flex flex-col gap-y-4.5">
          <h2 className="text-2xl mb-4.5 font-bebas">SINOPSIS</h2>
          <p className="text-[#A9A9A9] text-sm leading-relaxed">
            {synopsis || "Sinopsis tidak tersedia."}
          </p>
        </div>
        <div className="casts flex flex-col mt-9.75 gap-y-7.25">
          <h2 className="text-2xl mb-4.5 font-bebas">CAST UTAMA</h2>
          <div className="list-cast flex items-center gap-x-7 overflow-x-auto">
            {casts && casts.length > 0 ? (
              casts.map((cast, index) => (
                <div
                  key={index}
                  className="cast flex flex-col items-center w-fit"
                >
                  <img
                    src={cast.image}
                    alt={cast.name}
                    className="w-16.25 h-16.25 border border-[#3A4049] rounded-full object-cover"
                  />
                  <p className="text-white mt-2">{cast.name}</p>
                  <span>
                    <p className="text-[#6B7280] text-sm">{cast.character}</p>
                  </span>
                </div>
              ))
            ) : (
              <p className="text-[#A9A9A9] text-sm">Cast tidak tersedia.</p>
            )}
          </div>
        </div>
      </div>

      {/* Crew */}
      <div className="crew-card bg-[#1C2127] border border-[#2A2F37] rounded-lg pt-8 pb-11.25 px-5.5 w-fit flex flex-col mt-12 gap-y-4.5 h-fit">
        {crews && crews.length > 0 ? (
          <div className="w-59 flex justify-between pb-1.25 border-b border-[#2A2F37]">
            <span className="text-sm text-[#6B7280]">Sutradara</span>
            <span className="text-white text-sm">Bayu Kartono</span>
          </div>
        ) : (
          <p className="text-[#A9A9A9] text-sm">Crew tidak tersedia.</p>
        )}
      </div>
    </div>
  );
}
