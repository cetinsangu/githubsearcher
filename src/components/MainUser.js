import UserBio from './UserBio';
import Followers from './Followers';
import LastRepos from './LastRepos';

function MainUser() {
  return (
    <div className="grid md:grid-cols-2 md:gap-5 w-[90vw] pt-8 mx-auto max-w-screen-xl">
      <UserBio />
      <LastRepos />
    </div>
  );
}

export default MainUser;
