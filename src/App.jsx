import Home from "./pages/Home";
import Discover from "./pages/Discover";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      {/*   */}
    </Routes>
  );
}

export default App;
