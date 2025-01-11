import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart: React.FC<IBarChart> = ({ data }) => {
  // Prepare chart data
  const  chartData = {
    labels: data.map((item: any) => item.month), // Extract months
    datasets: [
      {
        label: "Income",
        data: data.map((item: any) => item.income), 
        backgroundColor: "#003d3a", 
        borderColor: "#388e3c",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: data.map((item: any) => item.expenses), 
        backgroundColor: "#f44336",
        borderColor: "#d32f2f",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount ($)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "550px", margin: "auto" }}>
      <Bar data={chartData} options={options as any} />
    </div>
  );
};

interface IBarChart {
  data: any;
  width?: string;
  height?: string;
}

export default BarChart;
