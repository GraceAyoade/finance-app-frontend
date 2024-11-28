import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC<IPieChart> = ({
  data,
  width = "100px",
  height = "100px",
}) => {
  if (
    !data ||
    typeof data.income !== "number" ||
    typeof data.expenses !== "number"
  ) {
    return <p>Invalid data provided.</p>;
  }

  const total = data.income + data.expenses;

  const chartData = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        data: [data.income, data.expenses],
        backgroundColor: ["#003d3a", "#F44336"], // Green for income, red for expenses
        hoverBackgroundColor: ["#66BB6A", "#EF5350"],
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const dataset = tooltipItem.dataset;
            const currentValue = dataset.data[tooltipItem.dataIndex];
            const percentage = ((currentValue / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${percentage}%`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width, height }}>
      <Pie data={chartData} options={options} />
      
    </div>
  );
};

interface IPieChart {
  data: any;
  width?: string;
  height?: string;
}

export default PieChart;
