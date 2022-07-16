import { createContext, useContext, useState, useEffect } from 'react';
import defUser from '../components/defaultDatas/defUser';
import defFollowers from '../components/defaultDatas/defFollowers';
import defRepos from '../components/defaultDatas/defRepos';
import defLatestRepos from '../components/defaultDatas/defLatestRepos';
import defFollowing from '../components/defaultDatas/defFollowing';

const githubApiUrl = 'https://api.github.com';

const AppContext = createContext();

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [githubUser, setGithubUser] = useState(defUser);
  const [githubFollowers, setGithubFollowers] = useState(defFollowers);
  const [githubFollowing, setGithubFollowing] = useState(defFollowing);
  const [githubRepos, setGithubRepos] = useState(defRepos);
  const [latestGithubRepos, setLatestGithubRepos] = useState(defLatestRepos);

  const fetchGithubDatas = async (user) => {
    setIsLoading(true);
    const userRes = await fetch(`${githubApiUrl}/users/${user}`);
    if (userRes.status === 200) {
      const userDatas = await userRes.json();
      setGithubUser(userDatas);
    }
    const followersRes = await fetch(`${githubApiUrl}/users/${user}/followers`);
    if (followersRes.status === 200) {
      const followersDatas = await followersRes.json();
      setGithubFollowers(followersDatas);
    }
    const followingRes = await fetch(`${githubApiUrl}/users/${user}/following`);
    if (followingRes.status === 200) {
      const followingData = await followingRes.json();
      setGithubFollowing(followingData);
    }
    const reposRes = await fetch(`${githubApiUrl}/users/${user}/repos`);
    if (reposRes.status === 200) {
      const reposDatas = await reposRes.json();
      setGithubRepos(reposDatas);
    }
    const latestRepos = await fetch(
      `${githubApiUrl}/users/${user}/repos?sort=created`
    );
    if (latestRepos.status === 200) {
      const latestReposDatas = await latestRepos.json();
      setLatestGithubRepos(latestReposDatas);
    }

    // setGithubUser(userData);
    // setGithubFollowers(followersData);
    // setGithubRepos(reposData);
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
        fetchGithubDatas,
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
