import {
  AiOutlineGoogle,
  AiOutlineGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { useAuth } from '../firebase/AuthContext';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
  const { createUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
    }
    if (password === confirmPassword && email && password && confirmPassword) {
      try {
        await createUser(email, password);
        toast.success('User created successfully');
        navigate('/');
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="font-poppins">
      <div className="bg-gray-800">
        <div className="flex flex-col w-[80vw] sm:w-1/2 sm:max-w-xl h-screen mx-auto items-center justify-center">
          <p className="border-b-4 text-white text-lg p-2 mb-5 border-sky-600">
            Sign Up
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-1 w-full mt-5"
          >
            <label className="text-white text-base">E-mail</label>
            <input
              className="w-full p-2 border border-gray-400 rounded-lg"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
            />
            <label className="text-white text-base">Password</label>
            <input
              className="w-full p-2 border border-gray-400 rounded-lg"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="6+ characters"
            />
            <label className="text-white text-base">Confirm Password</label>
            <input
              className="w-full p-2 border border-gray-400 rounded-lg "
              type="password"
              placeholder="6+ characters"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button className="w-full p-4 mt-5 bg-blue-400 text-white rounded-lg">
              Sign Up
            </button>

            <Link
              to={'/signin'}
              className="w-full p-4 mt-7 bg-blue-700 text-white text-center rounded-lg"
            >
              Already have an account?
              <span className="underline font-semibold">Sign In</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
