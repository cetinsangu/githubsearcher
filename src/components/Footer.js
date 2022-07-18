import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { motion } from 'framer-motion';
function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        delayChildren: 0.5,
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
  return (
    <motion.footer
      variants={containerVariants}
      whileInView="visible"
      viewport={{ once: true }}
      initial="hidden"
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
    </motion.footer>
  );
}

export default Footer;
