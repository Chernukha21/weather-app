import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

const ForecastChart = ({ data }) => {
  const options = {
    plugins: {
      legend: {
        display: true,
        labels: {
          boxWidth: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y}°C`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => `${value}°C`,
        },
      },
    },
  };
  const chartData = {
    labels: data.map((item) => item.time),

    datasets: [
      {
        label: 'Прогноз температури',
        data: data.map((item) => item.temperature),
        tension: 0.4,
      },
    ],
  };

  return <Line data={chartData} options={options} />;
};

export default ForecastChart;
