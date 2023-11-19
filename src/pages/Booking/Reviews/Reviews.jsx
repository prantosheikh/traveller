import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa"; // Import your icon library
import Rating from "react-rating";


const Reviews = ({ reviews }) => {
  console.log(reviews);
  return (
    <div>
    {reviews && reviews.length > 0 ? (
      reviews.map((review) => (
        <div key={review.id}>
          <Rating
            placeholderRating={review.rating}
            emptySymbol={<FaRegStar className="text-orange-300" />}
            placeholderSymbol={<FaStar className="text-orange-500" />}
            fullSymbol={<FaStar />}
            readonly
          />
          <h2>{review.comment}</h2>
        </div>
      ))
    ) : (
      <p>No reviews available</p>
    )}
  </div>
  );
};

export default Reviews;
