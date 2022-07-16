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
  const { githubRepos } = useAppContext();

  const calcMostStars = githubRepos
    .map((repo) => {
      return { stars: repo.stargazers_count, repo_name: repo.name };
    })
    .filter((repo) => repo.stars > 0)
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5);
  const labels = calcMostStars.map((repo) => repo.repo_name);
  const mostStars = calcMostStars.map((repo) => repo.stars);
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
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  return (
    <div className="h-96 w-72">
      <Bar data={data} options={options} />
    </div>
  );
}
