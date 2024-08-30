import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

function MoveToTop() {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup Function
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleMoveToTop() {
    window.scrollTo(0, 0);
  }

  console.log(scroll);

  return (
    <>
      {scroll > 1200 && (
        <Button
          onClick={handleMoveToTop}
          className="fixed right-[32px] bottom-[32px]"
        >
          <HiArrowUp />
        </Button>
      )}
    </>
  );
}

export default MoveToTop;
