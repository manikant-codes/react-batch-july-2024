import React from "react";
import AddTransactionForm from "../components/addTransaction/AddTransactionForm";
import PageTitle from "../components/common/PageTitle";
import { useParams } from "react-router-dom";

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
