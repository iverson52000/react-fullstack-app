import React, { useContext, useEffect } from 'react';
import { AppContext } from '../provider/AppProvider';

import ReviewCard from './ReviewCard';
import CommentForm from './CommentForm';


function DetailPage() {
    const { setRoute, restaurants, restaurantId } = useContext(AppContext);

    const curIndex = restaurants.findIndex((obj) => obj.id === restaurantId);
    const curReviews = restaurants[curIndex].reviews;

    let ratingObj = {
        max: [0, -1],  //[rating, index]
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

    useEffect(() => console.log(restaurants), [restaurants])

    if (restaurants.length === 0 || curReviews.length === 0) {
        return (
            <>
                <button className="btn btn-link mt-3" onClick={() => setRoute("list")}>Back to list</button>
                <h1>{restaurants[curIndex].name}</h1>
                <h3>No reivews</h3>
                <CommentForm />
            </>
        )
    } else {
        return (
            <>
                <button className="btn btn-link mt-3 pl-0" onClick={() => setRoute("list")}>Back to list</button>
                <h1>{restaurants[curIndex].name}</h1>
                <h4 className="mb-3">Overall average rating:
                    <span className="avgRating"> {restaurants[curIndex].avgRating.toFixed(1)} </span>
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

}

export default DetailPage;