import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa"; // Import your icon library
import Rating from "react-rating";
import User from "../../../../public/user.png";

const Reviews = ({ reviews }) => {
  console.log(reviews);
  return (
    <div>
        {reviews && reviews.length > 0 ?  <h1 className="text-3xl">{reviews.length} Reviews</h1>: ''}
    
      {reviews && reviews.length > 0 ? (
        reviews.map((review) => (
          <div className="my-10 text-slate-500" key={review.id}>
            <div>
              <div className="flex justify-between my-4 pr-6">
                <div className="flex items-center gap-4">
                  <img className="w-10" src={User} alt="" />
                  <p className="text-lg">{review.user}</p>
                </div>
                <p>{review.date}</p>
              </div>
            </div>

           <div className="flex gap-2 items-center">
           <Rating
              placeholderRating={review.rating}
              emptySymbol={<FaRegStar className="text-orange-300" />}
              placeholderSymbol={<FaStar className="text-orange-500" />}
              fullSymbol={<FaStar />}
              readonly
            />
            <p className="-mt-1">{review.rating}</p>
           </div>
            <h2 className="mt-3 leading-7">{review.comment}</h2>
          </div>
        ))
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default Reviews;
