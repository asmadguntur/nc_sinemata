import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <main class="main-content pt-24">
        <Hero />
      </main>
    </>
  );
}

export default Home;
