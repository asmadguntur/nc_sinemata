function Navbar() {
  return (
    <header class="navbar bg-slate-900 text-gray-200 py-5 px-8 font-inter flex justify-between items-center fixed w-full top-0 left-0 z-50">
      {/* <!-- header content logo-navlink --> */}
      <div class="logo-nav-container flex items-center gap-x-14">
        {/* <!-- logo --> */}
        <div class="logo flex items-center gap-x-2">
          <div class="circle bg-orange-400 h-3 w-3 rounded-full ml-1"></div>
          <span class="font-bebas text-white text-2xl">SINEMATA</span>
        </div>
        {/* <!-- navlinks --> */}
        <nav>
          <ul class="nav-links text-sm flex justify-between gap-x-6">
            <li>
              <a href="#" class="text-gray-200 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-gray-900">
                Browse
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-gray-900">
                Watchlist
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-gray-900">
                My Reviews
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/*  <!-- header-content input-avatar --> */}
      <div class="search-avatar-container flex items-center gap-x-6">
        {/*  <!-- input search --> */}
        <form class="input-search flex items-center gap-x-2">
          <input
            type="text"
            placeholder="Search..."
            class="bg-gray-800 text-gray-700 placeholder:text-gray-500 border focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md px-3 py-1"
          />
        </form>
        {/*  <!-- avatar display --> */}
        <div class="avatar flex items-center gap-x-2">
          <span class="text-sm font-bold bg-orange-400 text-zinc-900 px-2 py-1 rounded-full">
            A
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
