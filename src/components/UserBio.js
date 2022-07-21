import { useAppContext } from '../context/context';
import websiteLogo from '../images/userSecSVGS/website.svg';
import companyLogo from '../images/userSecSVGS/company.svg';
import locationLogo from '../images/userSecSVGS/location.svg';
import { motion } from 'framer-motion';

function UserBio() {
  const { githubUser } = useAppContext();
  const {
    avatar_url,
    html_url,
    name,
    bio,
    twitter_username,
    location,
    company,
    blog,
  } = githubUser;
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1.5,
        delayChildren: 1.7,
        staggerChildren: 0.4,
      },
    },
  };

  const headItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const subItem = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const extraSubItem = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="mt-20 relative p-3 rounded-tl-none rounded-xl bg-white dark:bg-gray-900 border border-white font-roboto before:content-['User'] before:absolute before:top-0 before:left-0 before:-translate-y-full before:text-black dark:before:text-white before:bg-white dark:before:bg-gray-900 before:px-5 before:py-1 before:border before:rounded-t-lg before:font-light"
    >
      <motion.div
        variants={headItem}
        className="flex justify-between items-center py-2"
      >
        <motion.div className="flex flex-row">
          <img className="w-16 h-16 rounded-full" src={avatar_url} alt={name} />
          <div className="flex flex-col ml-4 justify-center">
            <div className="text-xl font-bold dark:text-white">
              {name ? name : 'John Doe'}
            </div>
            <div className="text-sm font-extralight text-gray-500 dark:text-gray-300">
              @
              {twitter_username ? (
                <a
                  href={`https://twitter.com/${twitter_username}`}
                  target="_blank"
                >
                  {twitter_username}
                </a>
              ) : (
                'john_doe'
              )}
            </div>
          </div>
        </motion.div>
        <a
          href={html_url}
          className="bg-blue-700 dark:bg-slate-500 cursor-pointer text-white font-light text-base px-5 py-2 rounded-3xl mr-3 md:ml-10 border border-sky-300  dark:border-gray-100 hover:bg-white dark:hover:bg-slate-800 hover:text-blue-700 dark:hover:text-gray-200 hover:border-sky-500 dark:hover:border-gray-300  transition-all"
          target="_blank"
        >
          Visit
        </a>
      </motion.div>
      <motion.p
        variants={subItem}
        className="item mt-5 text-base text-center dark:text-white"
      >
        {bio}
      </motion.p>
      <div className="dark:text-gray-200">
        <motion.p
          variants={extraSubItem}
          className="flex gap-2 mt-5 font-thin text-sm items-center"
        >
          <img src={websiteLogo} alt="website_logo" />
          {blog ? (
            <a href={`https://${blog}`} target="_blank">
              {blog}
            </a>
          ) : (
            'No website'
          )}
        </motion.p>
        <motion.p
          variants={extraSubItem}
          className="flex gap-2 mt-3 font-thin text-sm items-center"
        >
          <img src={companyLogo} alt="company" />
          {company || 'No company'}
        </motion.p>
        <motion.p
          variants={extraSubItem}
          className="flex gap-2 mt-3 font-thin text-sm items-center"
        >
          <img src={locationLogo} alt="location_logo" />
          {location || 'No location'}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default UserBio;
