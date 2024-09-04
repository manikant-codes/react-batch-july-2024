import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyMobile, restockMobile } from "../redux/slices/mobileSlice";

function Home() {
  const dispatch = useDispatch();

  const numberOfMobiles = useSelector((store) => {
    return store.mobile.numberOfMobiles;
  });

  function handleBuy() {
    dispatch(buyMobile(5));
  }

  function handleRestock() {
    dispatch(restockMobile(5));
  }

  return (
    <div className="p-8 bg-purple-200 flex flex-col gap-4">
      <h1>Number of Mobiles: {numberOfMobiles}</h1>
      <div className="flex gap-4">
        <button
          className="pointer-events-auto rounded-md bg-purple-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-purple-500"
          onClick={handleBuy}
        >
          Buy
        </button>
        <button
          className="pointer-events-auto rounded-md bg-purple-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-purple-500"
          onClick={handleRestock}
        >
          Restock
        </button>
      </div>
    </div>
  );
}

export default Home;
