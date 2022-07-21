import { createContext, useContext, useState } from 'react';
import defUser from '../components/defaultDatas/defUser';
import defFollowers from '../components/defaultDatas/defFollowers';
import defRepos from '../components/defaultDatas/defRepos';
import defLatestRepos from '../components/defaultDatas/defLatestRepos';
import defFollowing from '../components/defaultDatas/defFollowing';
import defSubscribedRepos from '../components/defaultDatas/defSubscribedRepos';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const githubApiUrl = 'https://api.github.com';

const AppContext = createContext();

function AppProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [githubUser, setGithubUser] = useState(defUser);
  const [githubFollowers, setGithubFollowers] = useState(defFollowers);
  const [githubFollowing, setGithubFollowing] = useState(defFollowing);
  const [githubRepos, setGithubRepos] = useState(defRepos);
  const [latestGithubRepos, setLatestGithubRepos] = useState(defLatestRepos);
  const [subscribedRepos, setSubscribedRepos] = useState(defSubscribedRepos);

  const [error, setError] = useState(null);
  const remainingReq = async () => {
    const response = await fetch(`${githubApiUrl}/rate_limit`);
    const data = await response.json();
    if (data.resources.core.remaining === 0) {
      toast.error(
        'You have reached the limit of requests. Please try 1 hour later.'
      );
      setError(false);
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
        fetch(`${githubApiUrl}/users/${user}/subscriptions`),
      ]).then(async (responses) => {
        const [
          followersDatas,
          followingDatas,
          reposDatas,
          latestReposDatas,
          subscribedReposDatas,
        ] = await Promise.all(responses.map((response) => response.json()));
        setGithubFollowers(followersDatas);
        setGithubFollowing(followingDatas);
        setGithubRepos(reposDatas);
        setLatestGithubRepos(latestReposDatas);
        setSubscribedRepos(subscribedReposDatas);
        toast.success('Infos loaded successfully.', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    } else {
      setError(true);
      remainingReq();
      if (userRes.status === 404) {
        toast.error('User not found.');
      }
    }
    setIsLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        githubUser,
        githubFollowers,
        githubFollowing,
        githubRepos,
        latestGithubRepos,
        subscribedRepos,
        fetchGithubDatas,
        error,
        isDarkMode,
        setIsDarkMode,
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
