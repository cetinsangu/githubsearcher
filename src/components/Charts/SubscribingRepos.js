import { useAppContext } from '../../context/context';
import { motion } from 'framer-motion';
export function SubscribingRepos() {
  let containerVariants = {};
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    containerVariants = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.7,
          staggerChildren: 0.5,
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
          delay: 2.2,
          delayChildren: 1.7,
          staggerChildren: 0.5,
        },
      },
    };
  }

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      transition: { duration: 0.3 },
      y: 0,
      opacity: 1,
    },
  };

  const { subscribedRepos } = useAppContext();
  const repos = subscribedRepos.slice(0, 10);

  return (
    <motion.div
      variants={containerVariants}
      {...(isMobile ? { whileInView: 'visible' } : { animate: 'visible' })}
      viewport={{ once: true }}
      initial="hidden"
      className="mt-20 relative pb-3 rounded-tl-none rounded-xl flex flex-col bg-white font-roboto before:content-['Repos_Subscribing'] before:absolute before:top-0 before:left-0 before:-translate-y-full before:text-black before:bg-white before:px-5 before:py-1 before:border before:rounded-t-lg before:font-light h-80 sm:w-full"
    >
      <div className="overflow-y-scroll overflow-x-hidden">
        {repos.length >= 1 ? (
          repos.map((repo) => {
            const {
              name,
              id,
              html_url,
              description,
              stargazers_count,
              forks_count,
              fork,
            } = repo;
            return (
              <motion.div
                variants={item}
                {...(isMobile
                  ? { whileInView: 'visible' }
                  : { animate: 'visible' })}
                viewport={{ once: true }}
                className="item pt-3 border-b border-gray-200"
                key={id}
              >
                <div className="pt-2 flex sm:flex-row flex-col sm:items-baseline">
                  <div className="flex flex-col  sm:items-baseline sm:ml-4 py-2 px-2 w-full items-center sm:w-2/5">
                    <div className="text-lg font-bold">
                      {fork ? `${name} (forked)` : name}
                    </div>
                    <div className="w-[300px] sm:w-full mt-2 text-sm font-normal text-center sm:text-start text-gray-600">
                      {description
                        ? description
                        : 'This repo has no description...'}
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:w-3/5 flex flex-col items-center md:items-end md:mr-3">
                    <div className="flex flex-row  gap-2">
                      <div
                        className={`rounded-full h-14 w-14 bg-blue-700 text-white flex flex-col items-center justify-center`}
                      >
                        {forks_count}
                        <span className="text-xs font-extralight">
                          {forks_count > 1 ? 'forks' : 'fork'}
                        </span>
                      </div>
                      <div
                        className={`rounded-full h-14 w-14 bg-blue-700 text-white flex flex-col items-center justify-center`}
                      >
                        {stargazers_count}
                        <span className="text-xs font-extralight">
                          {stargazers_count > 1 ? 'stars' : 'star'}
                        </span>
                      </div>
                    </div>
                    <a
                      className=" bg-slate-800 border-2 border-blue-700 text-white text-center font-light text-xl my-5 px-4 py-1 rounded-xl hover:bg-white hover:text-slate-800 hover:border-blue-700 transition-all duration-200"
                      href={html_url}
                      target="_blank"
                    >
                      Go to Repo
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })
        ) : (
          <div className="text-center text-xl p-6 text-gray-500">
            There are not subscribed any repos YET.
          </div>
        )}
      </div>
    </motion.div>
  );
}
