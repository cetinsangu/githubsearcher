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
        delay: 1,
        delayChildren: 1.3,
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
      className="mt-20 relative p-3 rounded-tl-none rounded-xl bg-white font-roboto before:content-['User'] before:absolute before:top-0 before:left-0 before:-translate-y-full before:text-black before:bg-white before:px-5 before:py-1 before:border before:rounded-t-lg before:font-light"
    >
      <motion.div
        variants={headItem}
        className="flex justify-between items-center py-2"
      >
        <motion.div className="flex flex-row">
          <img className="w-16 h-16 rounded-full" src={avatar_url} alt={name} />
          <div className="flex flex-col ml-4 justify-center">
            <div className="text-xl font-bold">{name ? name : 'John Doe'}</div>
            <div className="text-sm font-extralight text-gray-500">
              @{twitter_username ? twitter_username : 'johndoe'}
            </div>
          </div>
        </motion.div>
        <a
          className="bg-blue-700 text-white font-light text-base px-5 py-2 rounded-3xl mr-3 border-2 border-sky-300 md:ml-10 hover:bg-white hover:text-blue-700 hover:border-sky-500 hover:border-2 transition-all"
          href={html_url}
          target="_blank"
        >
          Visit
        </a>
      </motion.div>
      <motion.p variants={subItem} className="item mt-5 text-base text-center">
        {bio}
      </motion.p>
      <motion.p
        variants={extraSubItem}
        className="flex gap-2 mt-5 font-thin text-sm items-center"
      >
        <img src={websiteLogo} alt="website_logo" />
        <a href={blog ? `https://${blog}` : '#'} target="_blank">
          {blog || 'No website'}
        </a>
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
    </motion.div>
  );
}

export default UserBio;
