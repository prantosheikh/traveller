import React, { useEffect, useState } from "react";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaRegFlag, FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { RiShareBoxFill } from "react-icons/ri";
import { WiTime10 } from "react-icons/wi";

import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import Container from "../../components/Shared/Container/Container";

import { CiLocationOn } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa";
// Import Swiper React components

const Booking = () => {
  const { id } = useParams();
  console.log(id);

  const [trips, setTrips] = useState([]);
  console.log(trips);

  useEffect(() => {
    fetch(`http://localhost:3000/featured-details/${id}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
      });
  }, [id]);

  return (
    <Container>
      <div className="pt-6 bg-white">
        <h1 className="flex items-center gap-4 text-base">
          <Link to="/">Home</Link> <IoIosArrowForward /> {trips?.title}
        </h1>
        <button className="py-2 px-4 bg-orange-50 text-orange-600 rounded-full my-4">
          Nature Tours{" "}
        </button>
        <h2 className="text-3xl font-bold">{trips?.title}</h2>

        <div className=" flex justify-between items-center my-4">
          <div className="flex items-center gap-2 text-base ">
            {trips?.reviews && trips.reviews.length > 0 ? (
              <>
                <Rating
                  placeholderRating={trips.reviews[0]?.rating}
                  emptySymbol={
                    <FaRegStar className="text-orange-300"></FaRegStar>
                  }
                  placeholderSymbol={
                    <FaStar className="text-orange-500"></FaStar>
                  }
                  fullSymbol={<FaStar></FaStar>}
                  readonly
                />
                <p className="-mt-1">
                  {trips.reviews[0]?.rating} by {trips.reviews?.length} reviews
                </p>
              </>
            ) : (
              <p>No reviews available</p>
            )}

            <div className="flex items-center text-base -mt-2 gap-2">
              <CiLocationOn className="text-2xl" />
              {trips?.location}
            </div>
          </div>

          <div className="flex justify-between items-center gap-6 text-[16px] text-gray-600">
            <div className="flex justify-center gap-3 items-center">
              <RiShareBoxFill />
              <span>Share</span>
            </div>
            <div className="flex justify-center gap-3 items-center">
              <FaRegHeart />
              <span>Wishlist</span>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-between items-center gap-6">
          <div className="w-[60%] ">
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={trips.pOne}
                alt={`Image`}
                className="object-cover w-full h-full scale-100 group-hover:scale-110 duration-500"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[39%]">
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={trips.pTwo}
                alt={`Image`}
                className="object-cover w-full h-full scale-100 group-hover:scale-110 duration-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="relative overflow-hidden rounded-lg group">
                <img
                  src={trips.pThree}
                  alt={`Image`}
                  className="object-cover w-full h-full scale-100 group-hover:scale-110 duration-500"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg group">
                <img
                  src={trips.pFour}
                  alt={`Image`}
                  className="object-cover w-full h-full scale-100 group-hover:scale-110 duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Another Section  */}

        <div className="flex justify-between gap-4 my-10">
          <div className="w-[70%]">
            <div className="grid grid-cols-4 items-center">
              <div className="flex gap-3 items-center">
                <div className="border rounded-lg p-4">
                  <FaRegFlag className="text-xl" />
                </div>
                <div>
                  <p className="text-base  text-gray-700">Tour Code</p>
                  <p className="text-gray-700">{trips?.tourCode}</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="border rounded-lg p-4">
                  <WiTime10 className="text-xl" />
                </div>
                <div>
                  <p className="text-base text-gray-700">Duratio</p>
                  <p className="text-gray-700">{trips?.duration}</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="border rounded-lg p-4">
                  <MdGroups className="text-xl" />
                </div>
                <div>
                  <p className="text-base text-gray-700">Guests</p>
                  <p className="text-gray-700">{trips?.guests}</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="border rounded-lg p-4">
                  <CiMoneyCheck1 className="text-xl" />
                </div>
                <div>
                  <p className="text-base text-gray-700">Price</p>
                  <p className="text-gray-700"> from {trips?.price}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%]">2</div>
        </div>

        {/* Another Section  Two*/}
        <div className="w-[70%]">
          <div>
            <h3 className="text-4xl font-medium">Description</h3>
            <p className="mt-4 text-base text-gray-700" style={{ lineHeight: "30px" }}>
              {trips?.description}
            </p>
          </div>
          <div className="my-4">
            <h2 className="text-2xl mt-7 mb-4">Tour Highlights</h2>
            

            {trips?.tourHighlights && trips.tourHighlights.length > 0 ? (
              <>
              {trips?.tourHighlights.map((tourHighlight) => (
              <li style={{lineHeight: "35px"}} className="text-base text-gray-800">{tourHighlight}</li>
            ))}
              </>
            ) : (
              <p>No available</p>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Booking;
