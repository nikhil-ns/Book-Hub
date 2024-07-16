import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-[75vh] flex flex-col md:flex-row items-center justify-center">
      <div className="w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-blue-500 text-center lg:text-left">
          Build your own library, order books now!!!
        </h1>
        <p className="mt-4 text-xl text-blue-400 text-center lg:text-left">
          Uncover captivating stories, enriching knowledge, and endless
          inspiration in our curated collection of books
        </p>
        <div className="mt-8">
          <Link to="/all-books" className="text-orange-500 text-xl lg:text-2xl font-semibold border border-black px-10 py-3 hover:bg-zinc-800 hover:text-white rounded-full transition-all duration-300">
            Discover Books
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center">
        <img src="./hero.jpg" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
