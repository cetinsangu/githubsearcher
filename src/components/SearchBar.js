import searchIcon from '../images/searchIcon.png';
import { useState } from 'react';
import { useAppContext } from '../context/context';
function SearchBar() {
  const [user, setUser] = useState('');
  const { fetchGithubDatas } = useAppContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    user && fetchGithubDatas(user);
    setUser('');
  };
  return (
    <div className="relative w-2/3 md:w-4/5 rounded-3xl mt-10 mx-auto  max-w-screen-xl">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center">
          <input
            type="text"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            className="font-roboto h-10 w-full text-center rounded-3xl z-0 focus:shadow focus:outline-none text-sm border-2 border-blue-400"
            placeholder="Search a GitHub User..."
          />
          <button className="absolute right-3 h-7 w-7 bg-blue-700 rounded-full flex items-center justify-center  hover:bg-blue-800">
            <img className="h-4 w-4" src={searchIcon} alt="search_icon" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
