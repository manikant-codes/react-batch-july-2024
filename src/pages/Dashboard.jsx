import React from "react";
import PageTitle from "../components/common/PageTitle";
import MyChart from "../components/dashboard/MyChart";

function Dashboard() {
  return (
    <div className="">
      <PageTitle title="Dashboard" />
      <div>
        <MyChart />
      </div>
    </div>
  );
}

export default Dashboard;
