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
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,

        color: "#E9EBFC",
      },
    },
    y: {
      border: {
        display: false,
      },
      grid: {
        color: "rgb(45, 55, 72 , 0.1)",
      },
      // stacked: true,
      min: 0,
      max: 4000,
      ticks: {
        stepSize: 2000,
        // padding: 5,/
      },
    },
  },
};

const HomeBarChartThreeB = () => {
  const labels = ["Tesla", "Carrefour", "Total energies", "Lidl france"];
  const data = {
    labels,
    datasets: [
      {
        label: "Conseil Voltaage",
        data: [2000, 1000, 1600, 2500],
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
export default HomeBarChartThreeB;
