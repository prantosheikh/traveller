import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import Container from "../../components/Shared/Container/Container";

const Destinations = () => {
  const { id } = useParams();
  console.log(id);

  

  const [destinations, setDestinations] = useState([]);
  console.log(destinations);



  useEffect(() => {
    fetch(`https://traveller-server-one.vercel.app/destinations/${id}`)
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);

  return (
    <Container>
      <div>
        <h2 className="text-3xl font-semibold"> {id}</h2>
        <div className="flex items-center gap-2 text-base my-4">
          <Link to="/">Home </Link> <IoIosArrowForward /> <p>{id}</p>
        </div>
      </div>
      {destinations.map((destination) => (
        <div className="flex justify-between relative group cursor-pointer rounded-lg p-4 bg-base-100 my-10 shadow-sm border">
          <div className="flex items-center gap-10 w-[68%]">
            <figure>
              <img
                className="w-96 rounded-lg"
                src={destination?.photos}
                alt="img"
              />
            </figure>

            <div>
              <div className="flex gap-3 items-center">
                <CiLocationOn />
                <p>
                  {destination?.like} {destination?.location}
                </p>
              </div>
              <h2 className="card-title mt-2">{destination?.title}</h2>
              {destination?.reviews && destination.reviews.length > 0 ? (
                <>
                  <div className="flex items-center gap-2 my-3">
                    <Rating
                      placeholderRating={destination.reviews[0]?.rating}
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
                      {destination.reviews[0]?.rating} by{" "}
                      {destination.reviews?.length} reviews
                    </p>
                  </div>
                </>
              ) : (
                <p>No reviews available</p>
              )}

              <p>{destination?.description.slice(0, 64)} ...</p>
            </div>
          </div>
          <div className="w-[30%] border-s">
            <div className="flex flex-col gap-20 items-center">
              <div className="flex gap-2 items-center text-base text-slate-700">
                <MdAccessTime />
                <p>{destination?.duration}</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <p className="text-lg">
                  From{" "}
                  <span className="text-xl font-semibold mt-">
                    {destination?.price}{" "}
                  </span>
                </p>


                <Link to={`booking/${destination?._id}`} className=" group-hover:bg-orange-500 border group-hover:text-white group-hover:duration-300 text-orange-500 border-orange-500 bg-white flex items-center gap-4 py-4 px-10 font-semibold rounded-lg">
                  View Details <GoArrowUpRight className="text-base" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Destinations;
