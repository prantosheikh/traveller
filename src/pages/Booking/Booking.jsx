import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container/Container";

import { CiLocationOn } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa";
// Import Swiper React components

const Booking = () => {
  const { id } = useParams();
  console.log(id);

  const [trips, setTrips] = useState([]);
  console.log(trips?.reviews);

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
      <div className="pt-16">
        <h2 className="text-3xl">{trips?.title}</h2>

        <div className="flex justify-between items-center my-4">
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
      </div>
    </Container>
  );
};

export default Booking;
