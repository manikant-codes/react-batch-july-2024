import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  console.log("params", params);
  return <div>ProductDetails {params.id}</div>;
}

export default ProductDetails;
