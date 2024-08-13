import React from "react";
import PageTitle from "../components/common/PageTitle";
import AddTransactionForm from "../components/addTransaction/AddTransactionForm";

function AddTransaction() {
  return (
    <div>
      <PageTitle title="Add Transaction" />
      <div>
        <AddTransactionForm />
      </div>
    </div>
  );
}

export default AddTransaction;
