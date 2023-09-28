import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define chart options
const options = {
  responsive: true,
  maintainAspectRatio: false, // Disable aspect ratio maintenance
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

// Generate sample data
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.random() * 1000), // Replace with your data source
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => Math.random() * 1000), // Replace with your data source
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

// Create the SalesReport component
const SalesReport = () => (
  <div className="overflow-hidden bg-white border border-gray-200 rounded-xl lg:col-span-8">
    <div className="px-4 pt-5 sm:px-6">
      <div className="flex flex-wrap items-center justify-between">
        <p className="text-base font-bold text-gray-900 lg:order-1">
          Sales Report
        </p>
      </div>

      {/* Insert the Line Chart here */}
      <div className="lg:col-span-8 chart-container">
        {" "}
        {/* Adjust the column span */}
        <Line options={options} data={data} />
      </div>
    </div>
  </div>
);

export default SalesReport;
