import React from "react";
import { Link } from "react-router-dom";
import img from "../../../public/9169206.jpg";

const ErrorPage = () => {
  return (
    <div className="relative w-[80%] mx-auto ">
      <img className="min-w-full " src={img} alt="" />
      <button className="absolute top-1/4 left-1/2 bg-orange-500 px-4 py-4 text-white font-bold rounded-lg ">
        <Link to='/'>Go To Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
