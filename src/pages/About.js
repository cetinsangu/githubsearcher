import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1.5,
        delayChildren: 1.7,
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const animateCross = {
    hidden: { opacity: 0, x: 100 },
    hiddenTwo: { opacity: 0, x: -100 },
    hiddenThree: { opacity: 0, y: 50 },
    hiddenFour: { opacity: 0, x: 100 },

    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    visibleTwo: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
    visibleThree: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.9 },
    },
    visibleFour: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 5.5 },
    },
  };
  return (
    <div className="bg-gray-800 font-poppins h-full ">
      <div className="font-poppins flex flex-col w-[90vw] sm:max-w-xl gap-y-8 xs:h-screen mx-auto items-center justify-center">
        <motion.h1
          variants={animateCross}
          initial="hidden"
          animate="visible"
          className="border-b-4 text-white text-xl xl:text-2xl p-2 border-sky-600"
        >
          ABOUT
        </motion.h1>
        <motion.h1
          variants={animateCross}
          initial="hiddenTwo"
          animate="visibleTwo"
          className="text-white text-lg xl:text-2xl text-center"
        >
          Github Searcher a simple app to help you track of Github informations.
        </motion.h1>
        <div className="text-white text-center">
          <motion.h3
            variants={animateCross}
            initial="hiddenThree"
            animate="visibleThree"
            className="text-lg border-b-2 p-2 border-sky-600 text-gray-200 font-semibold"
          >
            What you can do with this app
          </motion.h3>
          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-y-3 text-base xl:text-lg mt-2 no-underline"
          >
            <motion.li variants={item} className="mt-3">
              <p>
                1- Search for a Github user and see the total number of repos,
                followers, following and gists that searched user has.
              </p>
            </motion.li>
            <motion.li variants={item}>
              <p>2- See the latest repositories of the searched user</p>
            </motion.li>
            <motion.li variants={item}>
              <p>3- See the followers of the searched user</p>
            </motion.li>
            <motion.li variants={item}>
              <p>4- See the following of the searched user</p>
            </motion.li>
            <motion.li variants={item}>
              <p>5- See the most used languages of the searched user</p>
            </motion.li>
            <motion.li variants={item}>
              <p>6- See the most starred repositories of the searched user</p>
            </motion.li>
            <motion.li variants={item}>
              <p>7- See the most forked repositories of the searched user</p>
            </motion.li>
            <motion.li variants={item}>
              <p>8- See the subscribing repositories of the searched user</p>
            </motion.li>
          </motion.ul>
        </div>
        <motion.div
          variants={animateCross}
          initial="hiddenFour"
          animate="visibleFour"
          className="text-center my-8"
        >
          <Link className="px-20 py-4 bg-red-700 text-white rounded-lg" to="/">
            Return to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
