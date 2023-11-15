import React, { useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const Hero = () => {
  const [college, setCollege] = useState([]);
  const [search, setSearch] = useState("");
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchValue = event.target.search.value;
    if (searchValue.trim() === "") {
      toast.error("Please Input Something!");
      return;
    }

    fetch(
      `https://college-server-kappa.vercel.app/collegeSearchByName/${searchValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCollege(data);
        setShowAutocomplete(data.length > 0);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <div className="relative">
        <LazyLoad height={762}>
          <img src="https://i.ibb.co/0MRk73t/slider71.jpg" alt="" />
        </LazyLoad>

        <div className="absolute w-full top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-shadow-md">
          <div></div>
          <div className="w-1/2 mx-auto">
            <div className="input-group flex flex-col">
              <form
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000"
                onSubmit={handleSearch}
                className="flex items-center justify-center w-full  text-black"
              >
                <input
                  type="text"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setShowAutocomplete(false);
                  }}
                  onFocus={() => setShowAutocomplete(true)}
                  placeholder="Search"
                  name="search"
                  required
                  className="px-4 py-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c76f46]"
                />
                <button
                  type="submit"
                  className="ml-2 px-4 py-2  transition-transform bg-[#ce5a25] text-white rounded-md focus:outline-none"
                >
                  Search
                </button>
              </form>

              {showAutocomplete && college.length > 0 && (
                <div className="w-full  py-1">
                  <ul className="autocomplete-dropdown mt-5 w-full bg-white rounded">
                    {college.map((college) => (
                      <Link
                        className="w-full text-sm py-2 hover:text-[#ce5a25] px-3 flex items-center justify-between hover:underline"
                        to={`/college-details/${college?._id}`}
                        key={college._id}
                        onClick={() => {
                          setSearch(college.name);
                          setShowAutocomplete(false);
                        }}
                      >
                        {college.collegeName}
                        <HiArrowCircleRight></HiArrowCircleRight>
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="2000"
              className="bg-slate-50 opacity-75   border-e-8 border-[#ce5a25] lg:w-full rounded-tl-3xl px-8 py-7 mt-4"
            >
              <h1 className="lg:text-4xl font-bold text-black">
                Let us help you to find
                <br /> <span className="text-[#ce5a25]">Your Destination</span>
              </h1>
              <p className="text-gray-700 mb-5 hidden lg:block">
                Discover, compare, and book from a selection of over 15,000
                multiday tours worldwide with ease. Your journey begins with a
                click – explore the world seamlessly.
              </p>
              <div className="mt-4 lg:mb-3">
                <Link className="py-2 px-3 lg:px-8 -translate-y-6 scale-75 text-gray-800 border-2 border-[#ce5a25] rounded-2xl hover:bg-[#ce5a25] transform hover:text-white">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
