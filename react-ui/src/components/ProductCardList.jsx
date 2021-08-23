import React from "react";
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";

import { fetchProducts } from "../utils/api";

function ProductCardList() {
  const { data, status } = useQuery("products", fetchProducts);

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
