import React from "react";
import PageTitle from "../components/common/PageTitle";
import TransactionsList from "../components/reports/TransactionsList";

function Reports() {
  return (
    <div>
      <PageTitle title="Reports" />
      <div>
        <TransactionsList />
      </div>
    </div>
  );
}

export default Reports;
