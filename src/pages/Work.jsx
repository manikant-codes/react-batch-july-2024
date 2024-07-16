import React from "react";
import PageTitle from "../components/common/PageTitle";
import Tabs from "../components/gallery/Tabs";
import Gallery from "../components/gallery/Gallery";

function Work() {
  return (
    <div className="p-8">
      <PageTitle title="Our Recent Work" />
      <Tabs />
      <Gallery />
    </div>
  );
}

export default Work;
