import React from "react";

function PageTitle(props) {
  return (
    <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">
      {props.title}
    </h2>
  );
}

export default PageTitle;
