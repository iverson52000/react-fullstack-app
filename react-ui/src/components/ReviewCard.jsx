import React from "react";

function ReviewCard({ curReview }) {
  return (
    <div className="reviewCard">
      <p>Rating: {curReview?.rating}</p>
      <p>Date of the visit: {curReview?.date}</p>
      <p>Comment: {curReview?.comment}</p>
    </div>
  );
}

export default ReviewCard;
