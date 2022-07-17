import { useAppContext } from '../context/context';
import { motion } from 'framer-motion';
function Followers() {
  const { githubFollowers, fetchGithubDatas } = useAppContext();
  let containerVariants = {};
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    containerVariants = {
      hidden: { opacity: 0, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.5,
          staggerChildren: 0.3,
        },
      },
    };
  } else {
    containerVariants = {
      hidden: { opacity: 0, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delay: 2,
          delayChildren: 2.3,
          staggerChildren: 0.3,
        },
      },
    };
  }

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      animate="visible"
      initial="hidden"
      className="mt-10 relative rounded-tl-none rounded-xl flex flex-col bg-white font-roboto before:content-['Followers'] before:absolute before:top-0 before:left-0 before:-translate-y-full before:text-black before:bg-white before:px-5 before:py-1 before:border before:rounded-t-lg before:font-light h-80"
    >
      <div className="p-3 overflow-scroll">
        {githubFollowers.map((follower) => {
          const { avatar_url, login, html_url } = follower;
          return (
            <motion.div
              variants={item}
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
                  <div className="md:flex text-sm font-thin text-gray-500 w-48 ">
                    <a
                      className="hidden md:flex"
                      href={html_url}
                      target="_blank"
                    >
                      {html_url}
                    </a>
                    <a
                      className="md:hidden font-normal text-sky-500 text-xs"
                      href={html_url}
                      target="_blank"
                    >
                      Github Profile
                    </a>
                  </div>
                </div>
              </div>
              <a
                onClick={() => fetchGithubDatas(login)}
                className="bg-blue-700 cursor-pointer text-white font-light text-base px-5 py-2 rounded-3xl mr-3 md:ml-10 border-2 border-sky-300 hover:bg-white hover:text-blue-700 hover:border-sky-500 hover:border-2 transition-all"
                target="_blank"
              >
                Visit
              </a>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Followers;
