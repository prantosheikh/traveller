import React, { useEffect, useState } from "react";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaRegFlag, FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { RiShareBoxFill } from "react-icons/ri";
import { WiTime10 } from "react-icons/wi";
import FaqSection from '../../pages/Booking/FaqSection';

import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import Container from "../../components/Shared/Container/Container";

import { CiLocationOn } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
// Import Swiper React components

import GoogleMapReact from "google-map-react";
import Calendar from "./Calendar";
import Review from "./Reviews/Review";
import Reviews from "./Reviews/Reviews";
import Support from "./Support";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Booking = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const { id } = useParams();
  console.log(id);

  const [trips, setTrips] = useState([]);
  console.log(trips);
  


  useEffect(() => {
    fetch(`https://traveller-server-one.vercel.app/featured-details/${id}`, {
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

        <div>
          <div className="md:flex justify-between items-center my-4">
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
                    {trips.reviews[0]?.rating} by {trips.reviews?.length}{" "}
                    reviews
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

            <div className="flex md:justify-between items-center gap-6 text-[16px] text-gray-600">
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
          <div className="md:flex justify-between items-center gap-6">
            <div className="md:w-[60%] w-full">
              <div className="relative overflow-hidden rounded-lg group">
                <img
                  src={trips.pOne}
                  alt={`Image`}
                  className="object-cover w-full h-full scale-100 group-hover:scale-110 duration-500"
                />
              </div>
            </div>
            <div className="flex flex-col my-4 md:my-0 gap-4 lg:w-[39%] w-full">
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

          <div>
        
            <div className="md:flex gap-12 my-10">
              <div className="md:w-[70%] w-full">
                {" "}
                <div className="">
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4 items-center">
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
                <div>
                  <div>
                    <h3 className="text-3xl mt-8 font-semibold">Description</h3>
                    <p
                      className="mt-4 text-base text-gray-700"
                      style={{ lineHeight: "30px" }}
                    >
                      {trips?.description}
                    </p>
                  </div>
                  <div className="md:flex justify-between md:ms-10 items-center gap-4">
                    <div className="my-4">
                      <h2 className="text-2xl mt-7 font-semibold mb-4">
                        Tour Highlights
                      </h2>

                      {trips?.tourHighlights &&
                      trips.tourHighlights.length > 0 ? (
                        <>
                          {trips?.tourHighlights.map((tourHighlight) => (
                            <li
                              style={{ lineHeight: "35px" }}
                              className="text-base text-gray-800"
                            >
                              {tourHighlight}
                            </li>
                          ))}
                        </>
                      ) : (
                        <p>No available</p>
                      )}
                    </div>

                    <div className="my-4 me-20">
                      <h2 className="text-2xl mt-7 font-semibold mb-4">
                        Amenities
                      </h2>
                      {trips?.amenities && trips.amenities.length > 0 ? (
                        <>
                          {trips?.amenities.map((amenitie) => (
                            <p
                              style={{ lineHeight: "35px" }}
                              className="text-base text-gray-800"
                            >
                              <div className="flex items-center gap-2">
                                {" "}
                                <div className="bg-green-50 rounded-full p-2">
                                  <IoCheckmark className="text-green-600" />{" "}
                                </div>
                                {amenitie}
                              </div>
                            </p>
                          ))}
                        </>
                      ) : (
                        <p>No available</p>
                      )}
                    </div>
                  </div>

                  <div
                    className="my-20"
                    style={{ height: "100vh", width: "100%",}}
                  >
                    <h2 className="text-3xl my-4">Tour Map</h2>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: "" }}
                      defaultCenter={defaultProps.center}
                      defaultZoom={defaultProps.zoom}
                    >
                      <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                      />
                    </GoogleMapReact>
                  </div>
               

                  <Calendar />
                
                  <FaqSection/>
                  <div className="divider"></div> 
                  <Reviews reviews={trips?.reviews}/>
                  <Review/>
                </div>
              </div>
             
              <div className="md:w-[30%] p-10 border md:sticky md:top-28 bottom-12 h-96 border-orange-600 rounded-lg">
                <h3 className="text-xl">Booking Form</h3>
                <div className="flex justify-between my-4">
                  <h4 className="text-lg">From:</h4>
                  <input className="border rounded-lg " type="text" />
                </div>
                <hr />
                <div className="my-4">Time:</div>
                <hr />
                <div className="flex justify-between items-center my-4">
                  <h5>Tickets:</h5>
                  <p>please, select date first</p>
                </div>
                <h3 className="text-lg text-gray-700">Add Extra</h3>
                <div className="flex justify-between items-center my-4">
                  <h5> AddService per booking: </h5>
                  <p>$250.00</p>
                </div>
                <button className="w-full py-4 rounded-lg text-white bg-orange-500">
                  Book Now
                </button>
              </div>
            </div>

            {/* Another Section  Two*/}
           
          </div>
        </div>
        <Support/>
      </div>
    </Container>
  );
};

export default Booking;
