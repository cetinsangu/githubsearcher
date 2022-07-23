import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

import { Link } from 'react-router-dom';
function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.8,
        duration: 0.5,
        delayChildren: 2.1,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const animateCross = {
    hidden: { opacity: 0, x: 100 },
    hiddenTwo: { opacity: 0, x: -100 },
    hiddenThree: { opacity: 0, y: 50 },
    hiddenFour: { opacity: 0, y: 50 },
    hiddenFive: { opacity: 0, y: 50 },

    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    visibleTwo: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
    visibleThree: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.9 },
    },
    visibleFour: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 1.5 },
    },
    visibleFive: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 3 },
    },
  };
  return (
    <div className="bg-gray-800 font-poppins h-screen xs:h-full flex">
      <div className="font-poppins flex flex-col w-[90vw] sm:max-w-xl gap-y-5 xs:h-screen mx-auto items-center justify-center">
        <motion.h1
          variants={animateCross}
          initial="hidden"
          animate="visible"
          className="border-b-4 text-white text-xl xl:text-2xl p-2 border-sky-600"
        >
          Contact
        </motion.h1>
        <motion.h1
          variants={animateCross}
          initial="hiddenTwo"
          animate="visibleTwo"
          className="text-white text-lg xl:text-2xl text-center"
        >
          Feel free to contact me at:
        </motion.h1>
        <motion.a
          variants={animateCross}
          initial="hiddenThree"
          animate="visibleThree"
          className="font-semibold text-2xl sm:text-4xl text-white"
          href="tel:+905383611120"
        >
          +90-538-361-1120
        </motion.a>
        <motion.a
          variants={animateCross}
          initial="hiddenFour"
          animate="visibleFour"
          className="font-semibold text-2xl sm:text-4xl text-white"
          href="mailto:sangucetin@gmail.com"
        >
          sangucetin@gmail.com
        </motion.a>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-white p-10 flex items-center justify-center gap-x-3"
        >
          <motion.a
            variants={item}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.3 }}
            className="hover:text-slate-500"
            href="https://www.github.com/cetinsangu"
            target="_blank"
          >
            <AiFillGithub size={30} />
          </motion.a>
          <motion.a
            variants={item}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.3 }}
            className="hover:text-sky-500"
            href="https://www.linkedin.com/in/cetinsangu"
            target="_blank"
          >
            <AiFillLinkedin size={30} />
          </motion.a>
          <motion.a
            variants={item}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.3 }}
            className="hover:text-sky-400"
            href="https://www.twitter.com/littledevone_"
            target="_blank"
          >
            <AiOutlineTwitter size={30} />
          </motion.a>
        </motion.div>
        <motion.div
          variants={animateCross}
          initial="hiddenFive"
          animate="visibleFive"
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

export default Contact;
