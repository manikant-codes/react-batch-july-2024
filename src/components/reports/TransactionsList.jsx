import React, { useContext, useState } from "react";
import { transactionContext } from "../../App";
import { Button, Select, TextInput } from "flowbite-react";
import { HiTrash, HiPencil } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { getFilteredList } from "../dashboard/MyChart";

function TransactionsList() {
  const { transactions, setTransactions } = useContext(transactionContext);
  const navigate = useNavigate();

  const [type, setType] = useState("income");
  const [dateRange, setDateRange] = useState({
    fromDate: "",
    toDate: "",
  });

  function handleTypeChange(e) {
    setType(e.target.value);
  }

  function handleDateChange(e) {
    setDateRange({ ...dateRange, [e.target.name]: e.target.value });
  }

  if (!transactions || !transactions.length) {
    <p>No transactions to show!</p>;
  }

  function handleEdit(id) {
    navigate(`/transaction/${id}`);
  }

  function handleDelete(index, id) {
    const newTransactions = [...transactions];
    newTransactions.splice(index, 1);
    setTransactions(newTransactions);
    localStorage.setItem("transactions", JSON.stringify(newTransactions));
  }

  const filteredTransactions = getFilteredList(
    transactions,
    type,
    dateRange.fromDate,
    dateRange.toDate
  );

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <TextInput
          type="date"
          name="fromDate"
          value={dateRange.fromDate}
          onChange={handleDateChange}
        />
        <TextInput
          type="date"
          name="toDate"
          value={dateRange.toDate}
          onChange={handleDateChange}
        />
        <Select value={type} onChange={handleTypeChange}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </Select>
      </div>
      <ul className="flex flex-col gap-2">
        {filteredTransactions.map((transaction, index) => {
          return (
            <li
              className={`${
                transaction.type === "expense"
                  ? "bg-red-100 border border-red-200"
                  : "bg-green-100 border border-green-200"
              } p-2 rounded-md flex justify-end items-center`}
            >
              <div className="grow-[1]">
                <p className="font-bold">₹{transaction.amount}</p>
                <p>{transaction.category}</p>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  onClick={() => {
                    handleEdit(transaction.id);
                  }}
                  size="xs"
                >
                  <HiPencil />
                </Button>
                <Button
                  onClick={() => {
                    handleDelete(index, transaction.id);
                  }}
                  size="xs"
                  color="failure"
                >
                  <HiTrash />
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TransactionsList;
