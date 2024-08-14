import { Button, Label, Radio, Select, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { expenseCategories, incomeCategories } from "../../data/categories";
import { transactionContext } from "../../App";
import { useParams } from "react-router-dom";

const initialState = {
  id: Date.now(),
  amount: "",
  type: "expense",
  category: "fuel",
  date: new Date().toISOString(),
};

function AddTransactionForm() {
  const { transactions, setTransactions } = useContext(transactionContext);
  const { id } = useParams();
  const isAdd = id === "add";
  const [formState, setFormState] = useState(
    isAdd ? initialState : transactions.find((v) => v.id == id)
  );

  console.log(formState);

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTransactions([...transactions, formState]);
    localStorage.setItem(
      "transactions",
      JSON.stringify([...transactions, formState])
    );
    alert("Transaction Added!");
    e.target.reset();
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
          />
          <Label htmlFor="income">Income</Label>
        </div>
        <div className="flex items-center gap-1">
          <Radio
            name="type"
            value="expense"
            onChange={handleChange}
            id="expense"
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
