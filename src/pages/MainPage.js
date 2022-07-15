import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import MainInfos from '../components/MainInfos';
import MainUser from '../components/MainUser';
import Follows from '../components/Follows';
import Repos from '../components/Repos';
import loadingSvg from '../images/loading.svg';
import { useAppContext } from '../context/context';
function MainPage() {
  const { isLoading } = useAppContext();
  if (isLoading) {
    return (
      <div>
        <Navbar />
        <SearchBar />
        <img className="mx-auto w-36" src={loadingSvg} alt="loading_svg"></img>
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
      <Repos />
    </div>
  );
}

export default MainPage;
