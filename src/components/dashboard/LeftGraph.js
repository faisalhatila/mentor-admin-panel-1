import React from "react";
import { Line, Bar } from "react-chartjs-2";
import classes from "./LeftGraph.module.css";
const LeftGraph = () => {
  const chartData = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      // "My Kolachi",
    ],
    datasets: [
      {
        label: "Revenue $",
        data: [15000, 18000, 5000, 17000, 13000, 1800],
        backgroundColor: [
          // "rgba(255, 99, 132, 0.6)",
          "rgb(54, 48, 144,0.3)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          // "rgba(255, 99, 132, 0.6)",
        ],
      },
    ],
  };
  return (
    <div className="col-6">
      <div className={[`col`, classes.graphDiv].join(" ")}>
        <Line data={chartData} options={{}} />
      </div>
    </div>
  );
};

export default LeftGraph;
