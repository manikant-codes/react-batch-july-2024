import { Button, Label, Radio, Select, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { expenseCategories, incomeCategories } from "../../data/categories";
import { transactionContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
  id: Date.now(),
  amount: "",
  type: "expense",
  category: "fuel",
  date: new Date().toISOString(),
};

// const editInitialStateExample = {
//   id: 1723635457811,
//   amount: "77",
//   type: "expense",
//   category: "tea/coffee",
//   date: "2024-08-14",
// };

function AddTransactionForm() {
  const { transactionsList, dispatch } = useContext(transactionContext);
  const { id } = useParams();
  const isAdd = id === "add";
  const [formState, setFormState] = useState(
    isAdd ? initialState : transactionsList.find((v) => v.id == id)
  );
  const navigate = useNavigate();

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isAdd) {
      dispatch({ type: "ADD", payload: formState });
      e.target.reset();
      alert("Transaction Added!");
    } else {
      // const updatedTransactions = transactions.map((transaction, index) => {
      //   if (transaction.id == id) {
      //     return { ...transaction, ...formState };
      //   }
      //   return transaction;
      // });
      // setTransactions(updatedTransactions);
      // localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
      dispatch({ type: "UPDATE", payload: { id, formState } });
      alert("Transaction Updated!");
      navigate("/reports");
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <Label htmlFor="amount">Transaction Amount</Label>
        <TextInput
          id="amount"
          name="amount"
          type="number"
          value={formState.amount}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Radio
            name="type"
            value="income"
            onChange={handleChange}
            id="income"
            checked={formState.type === "income"}
          />
          <Label htmlFor="income">Income</Label>
        </div>
        <div className="flex items-center gap-1">
          <Radio
            name="type"
            value="expense"
            onChange={handleChange}
            id="expense"
            checked={formState.type === "expense"}
          />
          <Label htmlFor="expense">Expense</Label>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Label id="category">Category</Label>
        <Select
          htmlFor="category"
          name="category"
          value={formState.category}
          onChange={handleChange}
        >
          {(formState.type === "expense"
            ? expenseCategories
            : incomeCategories
          ).map((value) => {
            return <option value={value.value}>{value.name}</option>;
          })}
        </Select>
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="date">Transaction Date</Label>
        <TextInput
          id="date"
          name="date"
          type="date"
          value={formState.date}
          onChange={handleChange}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default AddTransactionForm;
