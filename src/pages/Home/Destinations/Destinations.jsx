import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/Shared/Container/Container";
import "./style.css";

const Destinations = () => {
  return (
    <Container>
      <h1 className="text-3xl font-semibold text-gray-800">
        Trending Destinations
      </h1>

      <div className="flex justify-between  gap-4 ">
        <div className="w-[67%]">
          <div className="flex justify-center items-center gap-6">
            <Link to="/">
              <div className="relative group cursor-pointer">
                <img src="https://i.ibb.co/FkpPrxD/h3-des1.jpg" alt="" />
                <div className="absolute bottom-16 left-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                  <h1 className="text-2xl text-white font-semibold"> Paris</h1>
                  <p className="text-white text-base "> 100+ Tours</p>
                </div>
              </div>
            </Link>

            <Link to="/">
              <div className="relative group cursor-pointer">
                <img src="https://i.ibb.co/60PzXN2/h3-des3.jpg" alt="" />
                <div className="absolute bottom-16 left-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                  <h1 className="text-2xl text-white font-semibold"> Bail</h1>
                  <p className="text-white text-base "> 120+ Tours</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-6 my-4">
            <Link to="/">
              <div className="relative group cursor-pointer">
                <img src="https://i.ibb.co/DCh7Nyg/h3-des2.jpg" alt="" />
                <div className="absolute bottom-16 left-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                  <h1 className="text-2xl text-white font-semibold">
                    {" "}
                    Singapoure
                  </h1>
                  <p className="text-white text-base "> 95+ Tours</p>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="relative group cursor-pointer">
                <img src="https://i.ibb.co/GFLfPHp/h3-des5.jpg" alt="" />
                <div className="absolute bottom-16 left-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                  <h1 className="text-2xl text-white font-semibold">
                    {" "}
                    Bangkok
                  </h1>
                  <p className="text-white text-base ">220+ Tours</p>
                </div>
              </div>
            </Link>

            <Link to="/">
              <div className="relative group cursor-pointer">
                <img src="https://i.ibb.co/N606X4Q/h3-des6.jpg" alt="" />
                <div className="absolute bottom-16 left-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                  <h1 className="text-2xl text-white font-semibold">
                    {" "}
                    Cox's bazar
                  </h1>
                  <p className="text-white text-base "> 70+ Tours</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[31%]">
          <Link to="/">
            <div className="relative group cursor-pointer">
              <img src="https://i.ibb.co/PDxqX6t/h3-des4.jpg" alt="" />
              <div className="absolute bottom-16 left-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                <h1 className="text-2xl text-white font-semibold">Paris</h1>
                <p className="text-white text-base "> 70+ Tours</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Destinations;
