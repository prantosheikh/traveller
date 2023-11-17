import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import Container from "../../../components/Shared/Container/Container";
import Destinations from "./Destinations";
// Import Swiper React components
import { CiLocationOn } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./styles.css";

// import required modules

const Featured = () => {
  const [featureds, setFeatured] = useState([]);
  console.log(featureds);

  useEffect(() => {
    fetch("http://localhost:3000/featuredtrips")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);

  return (
    <>
      <Container>
        <div>
          <div>
            <Destinations />
          </div>
          <>
            <Swiper
              Swiper
              slidesPerView={3}
              spaceBetween={30}
              className="mySwiper"
            >
              {featureds.map(
                (featured) => (
                  console.log(featured?.photos[1]),
                  (
                    <div>
                      <SwiperSlide>
                        <Link to={`/booking/${featured?._id}`}>
                          <div className="max-w-sm text-left rounded-xl overflow-hidden shadow-lg m-4">
                            <img
                              className="w-full"
                              src={featured?.photos}
                              alt="Card"
                            />
                            <div className="px-6 py-4">
                              <div className="flex items-center text-sm text-gray-700 gap-2">
                                <CiLocationOn className="text-2xl" />
                                {featured?.location}
                              </div>
                              <div className="font-semibold text-gray-700 text-md my-2 cursor-pointer  hover:underline hover:underline-offset-4 duration-300">
                                <Link to={`/booking/${featured?._id}`}>{featured?.title}</Link>
                              </div>
                              <div className="flex items-center gap-4 text-sm ">
                                <Rating
                                  placeholderRating={
                                    featured?.reviews[1]?.rating
                                  }
                                  emptySymbol={
                                    <FaRegStar className="text-blue-500"></FaRegStar>
                                  }
                                  placeholderSymbol={
                                    <FaStar className="text-orange-500"></FaStar>
                                  }
                                  fullSymbol={<FaStar></FaStar>}
                                  readonly
                                />
                                <p className="-mt-1">
                                  {featured?.reviews[1]?.rating} by{" "}
                                  {featured?.reviews.length} reviews
                                </p>
                              </div>
                              <div className="border my-3"></div>
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <IoMdTime className="text-xl" />
                                  <p className="text-base">
                                    {featured?.duration}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-[16px]">
                                    From {featured?.price}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    </div>
                  )
                )
              )}
            </Swiper>
          </>
        </div>
      </Container>
    </>
  );
};

export default Featured;
