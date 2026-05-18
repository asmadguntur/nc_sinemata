function Hero() {
  return (
    <section class="relative w-full max-w-[1200px] overflow-hidden rounded-md border border-cyan-500 bg-gradient-to-r from-[#241208] via-[#0a1020] to-[#071528] px-10 py-12">
      {/* <!-- CONTENT WRAPPER --> */}
      <div class="flex items-center justify-between gap-10">
        {/* <!-- LEFT CONTENT --> */}
        <article class="max-w-xl">
          {/* <!-- LABEL --> */}
          <span class="inline-block rounded bg-orange-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-orange-400">
            Featured This Week
          </span>

          {/* <!-- TITLE --> */}
          <header class="mt-5">
            <h1 class="text-5xl font-semibold uppercase leading-[1.1] tracking-tight text-white">
              Chronos <br />
              Letterbound
            </h1>
          </header>

          {/* <!-- MOVIE INFO --> */}
          <div class="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <span class="text-yellow-400">★ 8.7</span>
            <span>2024</span>
            <span>2h 18m</span>
            <span>Sci-Fi</span>
            <span>Drama</span>
          </div>

          {/* <!-- DESCRIPTION --> */}
          <p class="mt-6 max-w-lg text-sm leading-7 text-gray-300">
            Seorang penjaga arsip menemukan surat-surat dari masa depan yang
            ditulis untuknya — masing-masing meminta keputusan mustahil.
          </p>

          {/* <!-- BUTTONS --> */}
          <div class="mt-8 flex items-center gap-4">
            <button class="rounded-lg bg-orange-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-orange-400">
              &#9654 Lihat Detail
            </button>

            <button class="rounded-lg bg-white/10 px-6 py-3 text-sm font-medium text-gray-200 transition hover:bg-white/20">
              + Watchlist
            </button>
          </div>
        </article>

        {/* <!-- RIGHT POSTERS --> */}
        <aside class="relative hidden h-[260px] w-[320px] md:block">
          {/* <!-- CARD 1 --> */}
          <div class="absolute left-8 top-0 h-28 w-20 rotate-[-12deg] rounded bg-gradient-to-b from-purple-700 to-pink-500 shadow-xl">
            <span class="absolute bottom-2 left-2 text-[8px] uppercase text-white/70">
              Chronos
            </span>
          </div>

          {/* <!-- CARD 2 --> */}
          <div class="absolute left-24 top-8 h-28 w-20 rotate-[3deg] rounded bg-gradient-to-b from-green-700 to-emerald-400 shadow-xl">
            <span class="absolute bottom-2 left-2 text-[8px] uppercase text-white/70">
              Embersea
            </span>
          </div>

          {/* <!-- CARD 3 --> */}
          <div class="absolute right-4 top-2 h-28 w-20 rotate-[5deg] rounded bg-gradient-to-b from-red-700 to-red-400 shadow-xl">
            <span class="absolute bottom-2 left-2 text-[8px] uppercase text-white/70">
              Riptide
            </span>
          </div>

          {/* <!-- CARD 4 --> */}
          <div class="absolute left-10 bottom-0 h-28 w-20 rotate-[6deg] rounded bg-gradient-to-b from-amber-700 to-amber-400 shadow-xl">
            <span class="absolute bottom-2 left-2 text-[8px] uppercase text-white/70">
              Vesper
            </span>
          </div>

          {/* <!-- CARD 5 --> */}
          <div class="absolute left-24 bottom-[-10px] h-28 w-20 rotate-0 rounded bg-gradient-to-b from-sky-700 to-cyan-300 shadow-xl">
            <span class="absolute bottom-2 left-2 text-[8px] uppercase text-white/70">
              Nephele
            </span>
          </div>

          {/* <!-- CARD 6 --> */}
          <div class="absolute right-0 bottom-2 h-28 w-20 rotate-[-10deg] rounded bg-gradient-to-b from-slate-600 to-slate-400 shadow-xl">
            <span class="absolute bottom-2 left-2 text-[8px] uppercase text-white/70">
              Obsidian
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
