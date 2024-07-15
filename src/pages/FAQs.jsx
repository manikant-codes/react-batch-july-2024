import React from "react";
import Accordion from "../components/faqs/Accordion";
import PageTitle from "../components/common/PageTitle";

function FAQs() {
  return (
    <div className="p-8">
      <PageTitle title="FAQs" />
      <Accordion />
    </div>
  );
}

export default FAQs;
