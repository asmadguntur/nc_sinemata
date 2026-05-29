import { useState } from "react";
import Navbar from "../components/Navbar";
// import Trending from "../components/Trending";
// import Footer from "../components/Footer";

export default function Discover() {
  return (
    <>
      <Navbar activePage="discover" />
      <main className="main-content pt-18">
        <header className="section-header flex  justify-between items-center py-4 px-8">
          <h2 className="text-2xl font-bold">DISCOVER FILMS</h2>
        </header>
      </main>
    </>
  );
}
