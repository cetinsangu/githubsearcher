import {
  AiOutlineGoogle,
  AiOutlineGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';

import { useState } from 'react';
import { useAuth } from '../firebase/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignIn() {
  const navigate = useNavigate();
  const { signIn, signInWithGoogle, signInWithGithub, setUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      toast.success('Signed in successfully');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
    signIn(email, password);
  };
  return (
    <div className="font-poppins">
      <div className="bg-gray-800">
        <div className="flex flex-col w-[80vw] sm:w-1/2 sm:max-w-xl h-screen mx-auto items-center justify-center">
          <p className="border-b-4 text-white text-lg p-2 mb-5 border-sky-600">
            Login
          </p>
          <h1 className="text-white text-2xl ">Welcome Back!</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-1 w-full mt-5"
          >
            <label className="text-white text-base">E-mail</label>
            <input
              className="w-full p-2 border border-gray-400 rounded-lg"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="text-white text-base">Password</label>
            <input
              className="w-full p-2 border border-gray-400 rounded-lg"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <a className="text-sky-400 mt-1 text-sm" href="#">
              Forgot password?
            </a>
            <button className="w-full p-4 mt-5 bg-blue-400 text-white rounded-lg">
              Login
            </button>
            <p className="text-white text-center mt-5">or login using</p>
            <div className="flex justify-center flex-row gap-4 mt-5 text-white">
              <Link
                to={'/'}
                onClick={signInWithGithub}
                className="border-gray-400 border p-2 rounded-full"
              >
                <AiOutlineGithub size={30} />
              </Link>
              <a
                onClick={signInWithGoogle}
                className="border-gray-400 border p-2 rounded-full"
              >
                <AiOutlineGoogle size={30} />
              </a>
              <a
                onClick={() =>
                  toast('Will be added!', {
                    autoClose: 1000,
                  })
                }
                className="border-gray-400 border p-2 rounded-full"
                href="#"
              >
                <AiOutlineTwitter size={30} />
              </a>
            </div>
            <Link
              to={'/signup'}
              className="w-full p-4 mt-7 bg-blue-700 text-white text-center rounded-lg"
            >
              Sign Up
            </Link>
            <Link
              // onClick={() => setUser(true)}
              to={'/'}
              className="w-full p-4 mt-7 bg-red-700 text-white text-center  rounded-lg"
            >
              I'm a tester!
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
