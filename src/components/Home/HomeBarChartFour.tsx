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
      // align:"start",
      labels: {
        boxWidth: 15,
        boxHeight: 15,
        padding: 5,
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
        color: "#ffffff",
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
      max: 4000,
      ticks: {
        stepSize: 2000,

      },
    },
  },
};

const labels = ["Besoin su voie publique", "Installation privée prevue"];

export const data = {
  labels,
  datasets: [
    {
      label: "Questionnaires conducteurs d'entreprise",
      data: [1300, 1300],
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
    {
      label: "Questionnaires particuliers",
      data: [1300, 1300],
      backgroundColor: "#B3CFB5",
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

export default function HomeBarChartFour() {
  return <Bar options={options} data={data} />;
}
