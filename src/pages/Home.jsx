import { Button } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import React from "react";
import MyButton from "../components/common/MyButton";

function Home() {
  return (
    <div className="p-8 flex flex-col gap-4">
      <MyButton>
        <HiShoppingCart className="w-5 h-5" />
      </MyButton>
      <Button className="w-fit">Click Me</Button>
      <Button className="w-fit">Do Something</Button>
    </div>
  );
}

export default Home;
