import { Button, Label, Radio, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { expenseCategories, incomeCategories } from "../../data/categories";

function AddTransactionForm() {
  const [incomeType, setIncomeType] = useState("expense");

  function handleRadioChange(e) {
    setIncomeType(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      amount: e.target["transaction-amount"].value,
      type: e.target["transaction-type"].value,
      category: e.target["category"].value,
      date: e.target["date"].value,
    };

    console.log(data);
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <Label htmlFor="transaction-amount">Transaction Amount</Label>
        <TextInput
          id="transaction-amount"
          name="transaction-amount"
          type="number"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Radio
            name="transaction-type"
            value="income"
            onChange={handleRadioChange}
            id="income"
          />
          <Label htmlFor="income">Income</Label>
        </div>
        <div className="flex items-center gap-1">
          <Radio
            name="transaction-type"
            value="expense"
            onChange={handleRadioChange}
            id="expense"
          />
          <Label htmlFor="expense">Expense</Label>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Label id="category">Category</Label>
        <Select htmlFor="category" name="category">
          {(incomeType === "expense"
            ? expenseCategories
            : incomeCategories
          ).map((value) => {
            return <option value={value.value}>{value.name}</option>;
          })}
        </Select>
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="date">Transaction Date</Label>
        <TextInput id="date" name="date" type="date" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default AddTransactionForm;
