import Followers from './Followers';
import Following from './Following';
function Follows() {
  return (
    <div className="grid md:grid-cols-2 md:gap-5 w-[90vw] pt-8 mx-auto max-w-screen-xl">
      <Followers />
      <Following />
    </div>
  );
}

export default Follows;
