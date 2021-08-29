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
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {data && data.length === 0 && <div>No products</div>}
    </>
  );
}

export default ProductCardList;
