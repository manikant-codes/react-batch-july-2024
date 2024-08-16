import CanvasJSReact from "@canvasjs/react-charts";
import React, { useContext } from "react";
import { transactionContext } from "../../App";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function MyChart() {
  const { transactions, setTransactions } = useContext(transactionContext);

  let dataPoints = [];

  const expenses = transactions.filter((transaction) => {
    return transaction.type === "expense";
  });

  for (const e of expenses) {
    const alreadyPresent = dataPoints.find((point) => {
      if (point.label === e.category) {
        return true;
      }
      return false;
    });

    if (alreadyPresent) {
      dataPoints = dataPoints.map((point) => {
        if (point.label === alreadyPresent.label) {
          return { ...point, y: point.y + 1 };
        }
        return point;
      });
    } else {
      dataPoints.push({ y: 1, label: e.category });
    }
  }

  dataPoints = dataPoints.map((v) => ({
    ...v,
    y: (v.y * 100) / expenses.length,
  }));

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
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints,
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef = {ref => this.chart = ref} */
      />
    </div>
  );
}

export default MyChart;
