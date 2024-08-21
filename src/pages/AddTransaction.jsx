import React from "react";
import { useParams } from "react-router-dom";
import AddTransactionForm from "../components/addTransaction/AddTransactionForm";
import PageTitle from "../components/common/PageTitle";

function AddTransaction() {
  const { id } = useParams();
  const isAdd = id === "add";

  return (
    <div>
      <PageTitle title={isAdd ? "Add Transaction" : "Edit Transaction"} />
      <div>
        <AddTransactionForm />
      </div>
    </div>
  );
}

export default AddTransaction;
