import React from "react";
import { Pie } from "react-chartjs-2";


const GraphData = ({ income, expense }) => {
  const data = {
    labels: ["Expense", "Income"],
    datasets: [
      {
        label: "# Expense",
        data: [income, expense],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="custom_pie_box custom_pie_box-2">
        <div>
          <h3>Transactions</h3>
        </div>
        <Pie data={data} />
      </div>
    </>
  );
};

export default GraphData;