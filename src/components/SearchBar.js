import searchIcon from '../images/searchIcon.png';
import { useState } from 'react';
import { useAppContext } from '../context/context';
import { motion } from 'framer-motion';
function SearchBar() {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const [user, setUser] = useState('');
  const { fetchGithubDatas, isDarkMode } = useAppContext();
  console.log(isDarkMode);
  const handleSubmit = (e) => {
    e.preventDefault();
    user && fetchGithubDatas(user);
    setUser('');
  };
  return (
    <div
      className={`${
        isDarkMode ? 'dark' : ''
      } relative w-2/3 md:w-4/5 rounded-3xl mt-10 mx-auto max-w-screen-xl`}
    >
      <motion.form
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        variants={variants}
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center ">
          <input
            type="text"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            className="dark:bg-black font-roboto h-10 w-full text-center rounded-3xl z-0 focus:shadow focus:outline-none text-sm   dark:text-white"
            placeholder="Search a GitHub User..."
          />
          <button className="absolute right-3 h-7 w-7 bg-blue-600  dark:bg-gray-500 rounded-full flex items-center justify-center  hover:bg-blue-800">
            <img className="h-4 w-4" src={searchIcon} alt="search_icon" />
          </button>
        </div>
      </motion.form>
    </div>
  );
}

export default SearchBar;
