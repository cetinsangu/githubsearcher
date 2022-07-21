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
export function MostStarredRepos() {
  const { githubRepos, isDarkMode } = useAppContext();

  const calcMostStars = githubRepos
    .filter((repo) => repo.stargazers_count > 0)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);
  const labels = calcMostStars.map((repo) => repo.name);
  const mostStars = calcMostStars.map((repo) => repo.stargazers_count);
  const data = {
    labels,
    datasets: [
      {
        label: 'Stars',
        data: mostStars,
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
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Most Starred Repos',
        color: 'rgb(255, 255, 255)',
      },
      legend: {
        display: true,
        labels: {
          color: isDarkMode ? 'rgb(255, 255, 255)' : 'rgb(0,0,0)',
        },
      },
    },
    animation: {
      delay: 2200,
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  return (
    <div className="h-96 w-full sm:w-[450px]">
      {labels.length >= 1 ? (
        <Bar data={data} options={options} />
      ) : (
        <div className="text-center text-xl text-gray-500">
          There are no repos with more than 0 star, YET.
        </div>
      )}
    </div>
  );
}
