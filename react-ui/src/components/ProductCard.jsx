import React from "react";
import { useHistory } from "react-router-dom";

function ProductCard({ product }) {
  const history = useHistory();

  return (
    <div className="productCard">
      <h4>{product.name}</h4>
      <h5>
        Average rating:{" "}
        <span className="avgRating">{product.avgRating.toFixed(1)}</span>
      </h5>
      <button
        className="btn btn-info"
        onClick={() => {
          history.push(`/detail/${product.id}`);
        }}
      >
        View Reviews
      </button>
    </div>
  );
}

export default ProductCard;
