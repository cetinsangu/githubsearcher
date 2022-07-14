import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useAppContext } from '../../context/context';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

export function MostUsedLangs() {
  const { isLoading, githubRepos } = useAppContext();
  const calcLangs = githubRepos.reduce((acc, curr) => {
    const { language } = curr;
    if (!language) return acc;
    if (!acc[language]) {
      acc[language] = 1;
    } else {
      acc[language] += 1;
    }
    return acc;
  }, {});

  const langs = Object.values(calcLangs);

  const labels = Object.keys(calcLangs);

  const data = {
    labels: labels,
    datasets: [
      {
        label: '# of Votes',
        offset: 0,
        data: langs,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235,)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
        ],
      },
    ],
  };

  return (
    <div className="h-96 w-72">
      <Pie data={data} options={options} />
    </div>
  );
}
