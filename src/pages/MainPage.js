import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import MainInfos from '../components/MainInfos';
import MainUser from '../components/MainUser';
import Follows from '../components/Follows';
import Charts from '../components/Charts';
import Footer from '../components/Footer';
import loadingSvg from '../images/loading.svg';
import { useAppContext } from '../context/context';
function MainPage() {
  const { isLoading, error, isDarkMode } = useAppContext();
  if (isLoading || error) {
    return (
      <div className="h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
        <Navbar />
        <SearchBar />
        {!error && (
          <img
            className="mx-auto w-36 mt-20"
            src={loadingSvg}
            alt="loading_svg"
          ></img>
        )}
      </div>
    );
  }
  return (
    <div className={isDarkMode && 'dark'}>
      <div className="bg-gradient-to-b from-sky-500 via-cyan-700 to-violet-900 dark:bg-gradient-to-bl dark:from-neutral-800 dark:via-slate-800 dark:to-blue-600">
        <Navbar />
        <SearchBar />
        <MainInfos />
        <MainUser />
        <Follows />
        <Charts />
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
