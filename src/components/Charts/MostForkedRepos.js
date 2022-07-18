import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useAppContext } from '../../context/context';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function MostForkedRepos() {
  const { githubRepos } = useAppContext();
  const isMobile = window.innerWidth < 768;
  const mostForked = githubRepos
    .filter((repo) => repo.forks > 1)
    .sort((a, b) => b.forks - a.forks)
    .slice(0, 5);
  const labels = mostForked.map((repo) => repo.name);
  const forks = mostForked.map((repo) => repo.forks);
  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    scales: {
      y: {
        ticks: {
          font: {
            size: `${isMobile ? '8' : '12'}`,
          },
        },
      },
    },

    responsive: true,

    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },

      title: {
        display: true,
        position: 'left',
        text: 'Repos',
      },
    },
    animation: {
      delay: 2200,
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Forks',
        data: forks,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
        ],
      },
    ],
  };
  return (
    <div className="h-64 sm:h-70 w-full sm:w-full">
      {labels.length >= 1 ? (
        <Bar data={data} options={options} />
      ) : (
        <div className="text-center text-xl text-gray-500">
          There are no repos with more than 0 forks, YET.
        </div>
      )}
    </div>
  );
}
