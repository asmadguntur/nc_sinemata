import Home from "./pages/Home";
import Discover from "./pages/Discover";
import MovieDetail from "./pages/MovieDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      {/*   */}
    </Routes>
  );
}

export default App;
