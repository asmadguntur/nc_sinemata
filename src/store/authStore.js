// Minimal authStore to satisfy imports during development.
// This provides a `useAuth` selector-style function similar to Zustand.

const defaultState = {
  user: null, // set to null by default; modify as needed for testing
};

export function useAuth(selector = (s) => s) {
  try {
    return selector(defaultState);
  } catch (e) {
    return defaultState;
  }
}

export default useAuth;
