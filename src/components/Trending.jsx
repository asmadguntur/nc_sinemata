function Trending() {
  return (
    <section class="trending-section">
      {/* <!-- Section Header --> */}
      <header class="section-header flex  justify-between items-center py-4 px-8">
        {/* <!-- heading --> */}
        <h2 class="text-2xl font-bold">Trending Now</h2>
        {/* <!-- list to all items --> */}
        <a href="#" class="text-sm text-gray-500 hover:text-gray-200">
          Lihat Semua &#8594;
        </a>
      </header>

      {/* <!-- Trending Content --> */}
      <div class="trending-container">
        {/* <!-- Movie List --> */}
        <ul
          id="movie-trending-list"
          class="trending-list flex flex-wrap gap-4 overflow-x-auto px-8 py-4 max-w-full"
        >
          {/* <!-- Movie Item --> */}
          <li class="movie-card">
            <figure class="movie-poster relative rounded-2xl overflow-hidden h-96 bg-linear-to-b shadow-xl">
              <div class="category-favorite flex items-center justify-between gap-x-2 absolute top-0 left-0 w-full p-2">
                <div class="category font-bold text-xs">Sci-fi • Drama</div>
                <div class="bg-black/30 w-7 h-7 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/50 transition">
                  <span class="material-symbols-rounded text-orange-500 text-sm">
                    favorite
                  </span>
                </div>
              </div>
            </figure>
            <div class="movie-title flex justify-between items-center mt-2 px-1">
              <div class="movie-info flex flex-col gap-y-1">
                <span class="movie-title text-sm">Chrone Letterbound</span>
                <span class="movie-year text-xs text-gray-500">2024</span>
              </div>
              <div class="rating flex items-center gap-x-1 self-start">
                <span class="text-yellow-400 text-xs font-bold">★</span>
                <span class="text-yellow-400 text-xs font-bold">8.7</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Trending;
