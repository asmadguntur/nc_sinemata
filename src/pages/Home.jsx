import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trending from "../components/Trending";

function Home() {
  return (
    <>
      <Navbar />
      <main className="main-content pt-24">
        <Hero />
        <Trending />
      </main>
    </>
  );
}

export default Home;
