// Minimal watchListStore stub to satisfy imports during development.

const state = {
  movies: [],
  addMovie(movie) {
    if (!this.movies.some((m) => m.id === movie.id)) {
      this.movies.push(movie);
    }
  },
  removeMovie(id) {
    this.movies = this.movies.filter((m) => m.id !== id);
  },
};

export function useWatchlist(selector = (s) => s) {
  try {
    return selector(state);
  } catch (e) {
    return state;
  }
}

export default useWatchlist;
