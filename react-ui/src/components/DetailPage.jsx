import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { AppContext } from "../provider/AppProvider";

import ReviewCard from "./ReviewCard";
import CommentForm from "./CommentForm";

function DetailPage() {
  const history = useHistory();
  const { id } = useParams();
  const fetchProducts = async () => {
    const resp = await fetch("http://127.0.0.1:8000/viewset/restaurant/");
    const data = await resp.json();

    for (let item of data) {
      const reviews = item.reviews;
      reviews.sort((a, b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateB - dateA;
      });
      item.avgRating =
        reviews.reduce((acc, obj) => acc + (obj.rating || 0), 0) /
        (reviews.length || 1);
    }
    data.sort(function (a, b) {
      return b.avgRating - a.avgRating;
    });
    return data;
  };

  const { data, status, error } = useQuery("products", fetchProducts);
  console.log(data);

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
          onClick={() => {
            history.push("/list");
          }}
        >
          Back to list
        </button>
        <h1>{data[curIndex].name}</h1>
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
      </>
    );
  }

  return <></>;
  //   if (error) {
  //     return (
  //       <>
  //         <button className="btn btn-link mt-3" onClick={() => {}}>
  //           Back to list
  //         </button>
  //         <h1>{data[curIndex].name}</h1>
  //         <h3>No reivews</h3>
  //         <CommentForm />
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <button className="btn btn-link mt-3 pl-0" onClick={() => {}}>
  //           Back to list
  //         </button>
  //         <h1>{data[curIndex].name}</h1>
  //         <h4 className="mb-3">
  //           Overall average rating:
  //           <span className="avgRating">
  //             {" "}
  //             {data[curIndex].avgRating.toFixed(1)}{" "}
  //           </span>
  //         </h4>
  //         <h4>Highest rated review</h4>
  //         <ReviewCard curReview={curReviews[ratingObj.max[1]]} />
  //         <h4>Lowest rated review</h4>
  //         <ReviewCard curReview={curReviews[ratingObj.min[1]]} />
  //         <h4>Latest review</h4>
  //         <ReviewCard curReview={curReviews[0]} />
  //         <CommentForm />
  //       </>
  //     );
  //   }
}

export default DetailPage;
