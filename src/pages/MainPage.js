import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import MainInfos from '../components/MainInfos';
import MainUser from '../components/MainUser';
import Follows from '../components/Follows';
import Charts from '../components/Charts';
import loadingSvg from '../images/loading.svg';
import { useAppContext } from '../context/context';
function MainPage() {
  const { isLoading, error } = useAppContext();
  if (isLoading || error) {
    return (
      <div>
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
    <div>
      <Navbar />
      <SearchBar />
      <MainInfos />
      <MainUser />
      <Follows />
      <Charts />
    </div>
  );
}

export default MainPage;
