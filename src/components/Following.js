import React from 'react';
import { useAppContext } from '../context/context';
import { motion } from 'framer-motion';
function Following() {
  const { githubFollowing, fetchGithubDatas } = useAppContext();

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
          duration: 0.5,

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
    <div>
      <motion.div
        variants={containerVariants}
        {...(isMobile ? { whileInView: 'visible' } : { animate: 'visible' })}
        viewport={{ once: true }}
        initial="hidden"
        className="mt-20 md:mt-10 relative rounded-tl-none dark:bg-black rounded-xl flex flex-col bg-white font-roboto before:content-['Followings'] before:absolute before:top-0 before:left-0 before:-translate-y-full before:text-black dark:before:text-white before:bg-white dark:before:bg-black before:px-5 before:py-1 before:border dark:before:border-gray-600 before:rounded-t-lg before:font-light h-80"
      >
        <div className="p-3 overflow-scroll">
          {githubFollowing.length >= 1 ? (
            githubFollowing.map((follower) => {
              const { avatar_url, login, html_url } = follower;
              return (
                <motion.div
                  variants={item}
                  key={follower.id}
                  className="flex py-2 justify-between md:justify-center items-center w-full"
                >
                  <div className="flex flex-row">
                    <img
                      className="w-12 h-12 rounded-full border-2 dark:border-white"
                      src={avatar_url}
                      alt={login}
                    />
                    <div className="flex flex-col ml-4 justify-center xl:w-96">
                      <div className="text-lg font-bold dark:text-gray-100">
                        {login}
                      </div>
                      <div className="md:flex text-sm font-thin text-gray-500 w-48 ">
                        <a
                          className="hidden md:flex"
                          href={html_url}
                          target="_blank"
                        >
                          {html_url}
                        </a>
                        <a
                          className="md:hidden font-normal text-sky-500 dark:text-teal-100 text-xs"
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
                    className="bg-blue-700 dark:bg-slate-500 cursor-pointer text-white font-light text-base px-5 py-2 rounded-3xl mr-3 md:ml-10 border border-sky-300  dark:border-gray-100 hover:bg-white dark:hover:bg-slate-800 hover:text-blue-700 dark:hover:text-gray-200 hover:border-sky-500 dark:hover:border-gray-300 transition-all"
                    target="_blank"
                  >
                    Visit
                  </a>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center text-xl text-gray-500">
              No Followings
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Following;
