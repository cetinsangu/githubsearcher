import { useAppContext } from '../context/context';

function LastRepos() {
  const { githubRepos } = useAppContext();
  const repos = githubRepos.slice(0, 10);

  return (
    <div className="mt-20 relative rounded-tl-none rounded-xl flex flex-col bg-white font-roboto before:content-['Latest_Repos'] before:absolute before:top-0 before:left-0 before:-translate-y-full before:text-black before:bg-white before:px-5 before:py-1 before:border before:rounded-t-lg before:font-light h-80">
      <div className="overflow-scroll">
        {repos.map((repo) => {
          const {
            name,
            id,
            html_url,
            description,
            homepage,
            language,
            stargazers_count,
            watchers_count,
            forks_count,
            fork,
          } = repo;
          return (
            <div className="border-b-2 border-black" key={id}>
              <div className="pt-2 flex flex-row">
                <div className="flex flex-col ml-4 py-2 px-2 w-2/5">
                  <div className="text-lg font-bold">
                    {fork ? `${name} (forked)` : name}
                  </div>
                  <div className="mt-2 text-sm font-normal text-gray-600">
                    {description
                      ? description
                      : 'This repo has no description...'}
                  </div>
                </div>
                <div className="w-3/5 flex flex-col items-center md:items-end md:mr-3">
                  <div className="flex flex-row  gap-2">
                    <div className="rounded-full h-14 w-14 bg-blue-500 text-white flex flex-col items-center text-2xl justify-center">
                      {forks_count}
                      <span className="text-xs font-extralight">forks</span>
                    </div>
                    <div className="rounded-full h-14 w-14 bg-blue-500 text-white flex flex-col items-center text-2xl justify-center">
                      {stargazers_count}
                      <span className="text-xs font-extralight">stars</span>
                    </div>
                    <div className="rounded-full h-14 w-14 bg-blue-500 text-white flex flex-col items-center text-2xl justify-center">
                      {watchers_count}
                      <span className="text-xxs font-extralight">watchers</span>
                    </div>
                  </div>
                  <a
                    className=" bg-slate-800 border-2 border-blue-500 text-white text-center font-light text-xl my-5 px-4 py-1 rounded-xl"
                    href={html_url}
                    target="_blank"
                  >
                    Go to Repo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LastRepos;
