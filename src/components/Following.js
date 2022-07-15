import React from 'react';
import { useAppContext } from '../context/context';

function Following() {
  const { isLoading, githubFollowing } = useAppContext();

  return (
    <div className="mt-20 relative container p-5 rounded-tl-none rounded-xl flex flex-col bg-white font-roboto before:content-['Followers'] before:absolute before:top-0 before:left-0 before:-translate-y-full before:text-black before:bg-white before:px-5 before:py-1 before:border before:rounded-t-lg before:font-light h-80">
      <div className="overflow-scroll">
        {githubFollowing.map((follower) => {
          const { avatar_url, login, html_url } = follower;
          return (
            <div
              key={follower.id}
              className="flex py-2 justify-between md:justify-center items-center w-full"
            >
              <div className="flex flex-row">
                <img
                  className="w-12 h-12 rounded-full"
                  src={avatar_url}
                  alt={login}
                />
                <div className="flex flex-col ml-4 justify-center xl:w-96">
                  <div className="text-lg font-bold">{login}</div>
                  <div className="hidden md:flex text-sm font-thin text-gray-500 w-48 ">
                    <a href={html_url} target="_blank">
                      {html_url}
                    </a>
                  </div>
                </div>
              </div>
              <a
                className="bg-blue-700 text-white font-light text-base px-5 py-2 rounded-3xl mr-3 md:ml-10"
                href={html_url}
                target="_blank"
              >
                Visit
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Following;
