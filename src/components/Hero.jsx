function Hero() {
  return (
    <section className="relative w-full max-w-300 overflow-hidden rounded-md border border-cyan-500 bg-linear-to-r from-[#241208] via-[#0a1020] to-[#071528] px-10 py-12">
      {/* <!-- CONTENT WRAPPER --> */}
      <div className="flex items-center justify-between gap-10">
        {/* <!-- LEFT CONTENT --> */}
        <article className="max-w-xl">
          {/* <!-- LABEL --> */}
          <span className="inline-block rounded bg-orange-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-orange-400">
            Featured This Week
          </span>

          {/* <!-- TITLE --> */}
          <header className="mt-5">
            <h1 className="text-5xl font-semibold uppercase leading-[1.1] tracking-tight text-white">
              Chronos <br />
              Letterbound
            </h1>
          </header>

          {/* <!-- MOVIE INFO --> */}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <span className="text-yellow-400">★ 8.7</span>
            <span>2024</span>
            <span>2h 18m</span>
            <span>Sci-Fi</span>
            <span>Drama</span>
          </div>

          {/* <!-- DESCRIPTION --> */}
          <p className="mt-6 max-w-lg text-sm leading-7 text-gray-300">
            Seorang penjaga arsip menemukan surat-surat dari masa depan yang
            ditulis untuknya — masing-masing meminta keputusan mustahil.
          </p>

          {/* <!-- BUTTONS --> */}
          <div className="mt-8 flex items-center gap-4">
            <button className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-orange-400">
              &#9654; Lihat Detail
            </button>

            <button className="rounded-lg bg-white/10 px-6 py-3 text-sm font-medium text-gray-200 transition hover:bg-white/20">
              + Watchlist
            </button>
          </div>
        </article>

        {/* <!-- RIGHT POSTERS --> */}
        <aside className="relative hidden h-65 w-[320px] md:block">
          {/* <!-- CARD 1 --> */}
          <div className="absolute left-8 top-0 h-28 w-20 rotate-12 rounded bg-linear-to-b from-purple-700 to-pink-500 shadow-xl">
            <span className="absolute bottom-2 left-2 text-[8px] uppercase text-white/70">
              Chronos
            </span>
          </div>

          {/* <!-- CARD 2 --> */}
          <div className="absolute left-24 top-8 h-28 w-20 rotate-3 rounded bg-linear-to-b from-green-700 to-emerald-400 shadow-xl">
            <span className="absolute bottom-2 left-2 text-[8px] uppercase text-white/70">
              Embersea
            </span>
          </div>

          {/* <!-- CARD 3 --> */}
          <div className="absolute right-4 top-2 h-28 w-20 rotate-[5deg] rounded bg-linear-to-b from-red-700 to-red-400 shadow-xl">
            <span className="absolute bottom-2 left-2 text-[8px] uppercase text-white/70">
              Riptide
            </span>
          </div>

          {/* <!-- CARD 4 --> */}
          <div className="absolute left-10 bottom-0 h-28 w-20 rotate-6 rounded bg-linear-to-b from-amber-700 to-amber-400 shadow-xl">
            <span className="absolute bottom-2 left-2 text-[8px] uppercase text-white/70">
              Vesper
            </span>
          </div>

          {/* <!-- CARD 5 --> */}
          <div className="absolute left-24 bottom-2.5 h-28 w-20 rotate-0 rounded bg-linear-to-b from-sky-700 to-cyan-300 shadow-xl">
            <span className="absolute bottom-2 left-2 text-[8px] uppercase text-white/70">
              Nephele
            </span>
          </div>

          {/* <!-- CARD 6 --> */}
          <div className="absolute right-0 bottom-2 h-28 w-20 rotate-[-10deg] rounded bg-linear-to-b from-slate-600 to-slate-400 shadow-xl">
            <span className="absolute bottom-2 left-2 text-[8px] uppercase text-white/70">
              Obsidian
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
