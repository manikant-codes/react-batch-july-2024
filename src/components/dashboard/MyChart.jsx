import CanvasJSReact from "@canvasjs/react-charts";
import { Select, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { transactionContext } from "../../App";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function getFilteredList(transactions, type, fromDate, toDate) {
  const hasDates = fromDate && toDate ? true : false;
  let fromDateObj = hasDates ? new Date(fromDate) : null;
  let toDateObj = hasDates ? new Date(toDate) : null;

  let filteredTransactions = transactions?.filter((value) => {
    if (hasDates) {
      const dateObj = new Date(value.date);
      if (
        dateObj >= fromDateObj &&
        dateObj <= toDateObj &&
        value.type === type
      ) {
        return true;
      } else {
        return false;
      }
    }
    return value.type === type;
  });

  return filteredTransactions || [];
}

function getDataPoints(filteredTransactions) {
  let dataPoints = {};

  for (const value of filteredTransactions) {
    if (dataPoints[value.category]) {
      dataPoints[value.category] = {
        y: dataPoints[value.category].y + Number(value.amount),
        label: value.category,
      };
    } else {
      dataPoints[value.category] = {
        y: Number(value.amount),
        label: value.category,
      };
    }
  }

  return Object.values(dataPoints);
}

function MyChart() {
  const { transactions, setTransactions } = useContext(transactionContext);
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

  const filteredTransactions = getFilteredList(
    transactions,
    type,
    dateRange.fromDate,
    dateRange.toDate
  );

  const dataPoints = getDataPoints(filteredTransactions);

  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Monthly Expenses",
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: `<b>{label}</b>: ₹{y}`,
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - ₹{y}",
        dataPoints,
      },
    ],
  };

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
      <CanvasJSChart options={options} />
    </div>
  );
}

export default MyChart;
