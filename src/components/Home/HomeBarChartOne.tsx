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
      //   align: "start",
      display: false,
      text: "Conseil Voltaage et engagements des aménageurs en nombre de points de charge",
    },
    legend: {
      labels: {
        boxWidth: 15,
        boxHeight: 15,
        padding: 10,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        color: "#E9EBFC",
      },
      stacked: true,
    },
    y: {
      border: {
        display: false,
      },
      grid: {
        color: "rgb(45, 55, 72 , 0.1)",
      },
      stacked: true,
      min: 0,
      max: 600,
      ticks: {
        stepSize: 200,
        padding:10
      },
    },
  },
};

const labels = ["Syndicat", "Acteurs Privées"];

export const data = {
  labels,
  datasets: [
    {
      label: "Conseil Voltaage",
      data: [390, 0],
      backgroundColor: "#FB7E8A",
      borderWidth: 2,
      borderColor: "#E9EBFC",
      borderRadius: {
        topLeft: 20,
        topRight: 20,
        bottomLeft: 20,
        bottomRight: 20,
      },
      borderSkipped: false,
      maxBarThickness: 100,
    },
    {
      label: "PdC du sindicat",
      data: [100, 0],
      backgroundColor: "#6176F4",
      borderWidth: 2,
      borderColor: "#E9EBFC",
      borderRadius: {
        topLeft: 20,
        topRight: 20,
        bottomLeft: 20,
        bottomRight: 20,
      },
      borderSkipped: false,
      maxBarThickness: 100,
    },
    {
      label: "Acteurs Privés",
      data: [0, 320],
      backgroundColor: "#101935",
      borderWidth: 2,
      borderColor: "#E9EBFC",
      borderRadius: {
        topLeft: 20,
        topRight: 20,
        bottomLeft: 20,
        bottomRight: 20,
      },
      borderSkipped: false,
      maxBarThickness: 100,
    },
  ],
};


export default function HomeBarChartOne() {
  return <Bar options={options} data={data} />;
}
