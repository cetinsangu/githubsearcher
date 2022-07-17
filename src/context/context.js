import { createContext, useContext, useState, useEffect } from 'react';
import defUser from '../components/defaultDatas/defUser';
import defFollowers from '../components/defaultDatas/defFollowers';
import defRepos from '../components/defaultDatas/defRepos';
import defLatestRepos from '../components/defaultDatas/defLatestRepos';
import defFollowing from '../components/defaultDatas/defFollowing';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const githubApiUrl = 'https://api.github.com';

const AppContext = createContext();

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [githubUser, setGithubUser] = useState(defUser);
  const [githubFollowers, setGithubFollowers] = useState(defFollowers);
  const [githubFollowing, setGithubFollowing] = useState(defFollowing);
  const [githubRepos, setGithubRepos] = useState(defRepos);
  const [latestGithubRepos, setLatestGithubRepos] = useState(defLatestRepos);
  const [remaining, setRemaining] = useState(0);

  const [error, setError] = useState(null);
  const remainingReq = async () => {
    const response = await fetch(`${githubApiUrl}/rate_limit`);
    const data = await response.json();
    if (data.resources.core.remaining > 0) {
      setRemaining(data.resources.core.remaining);
    } else {
      toast.error(
        'You have reached the limit of requests. Please try again later.'
      );
      setError(true);
    }
  };
  const fetchGithubDatas = async (user) => {
    setError(false);
    setIsLoading(true);
    const userRes = await fetch(`${githubApiUrl}/users/${user}`);
    if (userRes.status === 200) {
      const userDatas = await userRes.json();
      setGithubUser(userDatas);

      await Promise.all([
        fetch(`${githubApiUrl}/users/${user}/followers`),
        fetch(`${githubApiUrl}/users/${user}/following`),
        fetch(`${githubApiUrl}/users/${user}/repos`),
        fetch(`${githubApiUrl}/users/${user}/repos?sort=created`),
      ]).then(async (responses) => {
        console.log(responses);
        const [followersDatas, followingDatas, reposDatas, latestReposDatas] =
          await Promise.all(responses.map((response) => response.json()));
        setGithubFollowers(followersDatas);
        setGithubFollowing(followingDatas);
        setGithubRepos(reposDatas);
        setLatestGithubRepos(latestReposDatas);
        toast.success(
          `Infos loaded successfully. ${remaining} calls remaining.`
        );
      });
    } else {
      setError(true);
      remainingReq();
      remaining !== 0 &&
        toast.error(`User not found. ${remaining} calls remaining.`);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    remaining >= 1 && remainingReq();
  }, []);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        githubUser,
        githubFollowers,
        githubFollowing,
        githubRepos,
        latestGithubRepos,
        fetchGithubDatas,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext };
