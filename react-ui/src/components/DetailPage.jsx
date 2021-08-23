import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";

import { fetchProducts } from "../utils/api";
import ReviewCard from "./ReviewCard";
import CommentForm from "./CommentForm";

function DetailPage() {
  const history = useHistory();
  const { id } = useParams();

  const { data, status } = useQuery("products", fetchProducts);

  if (status === "success") {
    const curIndex = data.findIndex((obj) => obj.id === parseInt(id));
    const curReviews = data[curIndex].reviews;

    let ratingObj = {
      max: [0, -1], //[rating, index]
      min: [6, -1],
    };

    for (let i = 0; i < curReviews.length; i++) {
      let curRating = curReviews[i].rating;

      if (curRating > ratingObj.max[0]) {
        ratingObj.max[0] = curRating;
        ratingObj.max[1] = i;
      }

      if (curRating < ratingObj.min[0]) {
        ratingObj.min[0] = curRating;
        ratingObj.min[1] = i;
      }
    }

    return (
      <>
        <button
          className="btn btn-link mt-3 pl-0"
          onClick={() => history.push("/list")}
        >
          Back to list
        </button>
        <h1>{data[curIndex].name}</h1>
        {data.length === 0 ? (
          <div>
            <h3>No reivews</h3>
            <CommentForm />
          </div>
        ) : (
          <div>
            <h4 className="mb-3">
              Overall average rating:
              <span className="avgRating">
                {" "}
                {data[curIndex].avgRating.toFixed(1)}{" "}
              </span>
            </h4>
            <h4>Highest rated review</h4>
            <ReviewCard curReview={curReviews[ratingObj.max[1]]} />
            <h4>Lowest rated review</h4>
            <ReviewCard curReview={curReviews[ratingObj.min[1]]} />
            <h4>Latest review</h4>
            <ReviewCard curReview={curReviews[0]} />
            <CommentForm />
          </div>
        )}
      </>
    );
  }

  return <></>;
}

export default DetailPage;
