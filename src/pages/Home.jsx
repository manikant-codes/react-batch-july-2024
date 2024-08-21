import React from "react";

function Home() {
  const money = 0;

  if (!money) return <h1>No money!</h1>;

  return (
    <div>
      {/* <h1>{age >= 18 ? "You can vote." : "You can not vote."}</h1> */}
      <h1>{money > 0 && "You can shop."}</h1>
    </div>
  );
}

export default Home;
