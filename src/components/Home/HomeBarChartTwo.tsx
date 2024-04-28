import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  plugins: {
    title: {
        align: "end" as "end",
      display: true,
      text: "Présence faible",
    },
    legend: {
      display: false,
      labels: {
        boxWidth: 15,
        boxHeight: 15,
        // padding: 10,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: "y" as "y",
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
        color: "#E9EBFC",
      },
      min: 0,
      max: 20,
      ticks: {
        stepSize: 5,
        // padding: 5,/
      },
    },
    y: {
      border: {
        display: false,
      },
      grid: {
        color: "rgb(45, 55, 72 , 0.1)",
      },
    },
  },
};

const HomeBarChartTwo = () => {
  const labels = [""];
  const data = {
    labels,
    datasets: [
      {
        label: "Conseil Voltaage",
        data:  [[8,15]],
        backgroundColor: "#8E9DF6",
        borderWidth: 2,
        borderColor: "#ffffff",
        borderRadius: {
          topLeft: 20,
          topRight: 20,
          bottomLeft: 20,
          bottomRight: 20,
        },
        borderSkipped: false,
        maxBarThickness: 40,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
export default HomeBarChartTwo;
