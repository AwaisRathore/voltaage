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
      title: {
        display: true,
        text: "Watts",
      },
      border: {
        display: false,
      },
      grid: {
        color: "rgb(45, 55, 72 , 0.1)",
      },
      // stacked: true,
      min: 0,
      max: 1000,
      ticks: {
        stepSize: 500,
        // padding: 5,/
      },
    },
  },
};

const HomeBarChartThreeA = () => {
  const labels = ["< 7.4 kW", "22 kW AC", "24 kW DC", ">50 kW"];
  const data = {
    labels,
    datasets: [
      {
        label: "Conseil Voltaage",
        data: [750, 550, 850, 900],
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
export default HomeBarChartThreeA;
