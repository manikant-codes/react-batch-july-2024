import { Button, Card } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const navigate = useNavigate();

  function goToDetails() {
    navigate(`/products/${props.id}`);
  }

  return (
    <Card
      className="max-w-sm border border-slate-300"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={props.image}
      onClick={goToDetails}
    >
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <div className="mb-5 mt-2.5 flex items-center">
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          {props.rating}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          ${props.price}
        </span>
        <Button pill size="xs" color={"primary"}>
          <span className="flex items-center gap-1">
            <HiPlus /> <span>Add to Cart</span>
          </span>
        </Button>
      </div>
    </Card>
  );
}

export default ProductCard;
