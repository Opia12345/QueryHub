import React from "react";
import SearchBar from "../Components/SearchBar";
import Navbar from "../Components/Navbar";
import { ListMagnifyingGlass } from "@phosphor-icons/react";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <main>
        <Navbar />
        <div className="flex flex-col mt-[15%] justify-center items-center">
          <span className="flex flex-col justify-center items-center">
            <ListMagnifyingGlass className="text-pink-500" size={50} />
            <h1 className="font-black text-4xl">QueryHub</h1>
          </span>
          <SearchBar />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
