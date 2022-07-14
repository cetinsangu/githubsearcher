import UserBio from './UserBio';
import Followers from './Followers';

function MainUser() {
  return (
    <div className="grid md:grid-cols-2 md:gap-5 w-[90vw] pt-8 mx-auto max-w-screen-xl">
      <UserBio />
      <Followers />
    </div>
  );
}

export default MainUser;
