import React from "react";
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";

function ProductCardList() {
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

  const { data, status } = useQuery("products", fetchProducts);
  console.log(data);

  return (
    <>
      {status === "success" && (
        <div>
          <h1 className="mt-5">Product List</h1>
          {data.map((product, i) => {
            return <ProductCard product={product} key={i} />;
          })}
        </div>
      )}
    </>
  );
}

export default ProductCardList;
