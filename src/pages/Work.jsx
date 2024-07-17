import React, { useState } from "react";
import PageTitle from "../components/common/PageTitle";
import Tabs from "../components/gallery/Tabs";
import Gallery from "../components/gallery/Gallery";

function Work() {
  const [activeTab, setActiveTab] = useState(1);

  function handleTabClick(tabId) {
    setActiveTab(tabId);
  }

  console.log("activeTab", activeTab);

  return (
    <div className="p-8">
      <PageTitle title="Our Recent Work" />
      <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
      <Gallery activeTab={activeTab} />
    </div>
  );
}

export default Work;
