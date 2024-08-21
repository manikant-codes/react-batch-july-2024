import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { HiPencil, HiTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { transactionContext } from "../../App";
import { useFilters } from "../../hooks/useFilters";

function TransactionsList() {
  const { transactions, setTransactions } = useContext(transactionContext);
  const navigate = useNavigate();
  const { filteredTransactions, Filters } = useFilters();

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

  return (
    <div>
      <Filters />
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
