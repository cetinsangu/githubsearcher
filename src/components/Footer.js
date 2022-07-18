import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="text-white p-10 flex items-center justify-center gap-x-3">
      <a
        className="hover:text-slate-500"
        href="https://www.github.com/cetinsangu"
        target="_blank"
      >
        <AiFillGithub size={30} />
      </a>
      <a
        className="hover:text-sky-500"
        href="https://www.linkedin.com/in/cetinsangu"
        target="_blank"
      >
        <AiFillLinkedin size={30} />
      </a>
      <a
        className="hover:text-sky-400"
        href="https://www.twitter.com/littledevone_"
        target="_blank"
      >
        <AiOutlineTwitter size={30} />
      </a>
    </footer>
  );
}

export default Footer;
