import { useAppContext } from '../context/context';

function MainInfos() {
  const { isLoading, githubUser } = useAppContext();
  const { public_repos, followers, following, public_gists } = githubUser;
  const items = [
    {
      id: 1,
      name: 'repos',
      value: public_repos,
    },
    {
      id: 2,
      name: 'followers',
      value: followers,
    },
    {
      id: 3,
      name: 'following',
      value: following,
    },
    {
      id: 4,
      name: 'gists',
      value: public_gists,
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 place-items-center mt-10 gap-y-3 max-w-screen-xl mx-auto">
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex flex-col items-center justify-center font-roboto border-2 border-blue-400 hover:border-4 hover:border-blue-700 transition-all duration-75"
          >
            <div
              className={`${
                item.value.toString().length > 3 ? 'md:text-4xl' : 'md:text-5xl'
              } 
              } ${
                item.value.toString().length > 3 ? 'text-2xl' : 'text-4xl'
              } font-bold`}
            >
              {item.value}
            </div>
            <div className="text-sm md:text-base font-light text-gray-500">
              {item.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MainInfos;
