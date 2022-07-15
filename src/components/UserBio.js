import { useAppContext } from '../context/context';
import websiteLogo from '../images/userSecSVGS/website.svg';
import companyLogo from '../images/userSecSVGS/company.svg';
import locationLogo from '../images/userSecSVGS/location.svg';

function UserBio() {
  const { isLoading, githubUser } = useAppContext();
  const {
    avatar_url,
    html_url,
    name,
    bio,
    twitter_username,
    location,
    company,
    blog,
  } = githubUser;
  return (
    <div className="mt-20 relative container p-5 rounded-tl-none rounded-xl bg-white font-roboto before:content-['User'] before:absolute before:top-0 before:left-0 before:-translate-y-full before:text-black before:bg-white before:px-5 before:py-1 before:border before:rounded-t-lg before:font-light">
      <div className="flex justify-between items-center py-2">
        <div className="flex flex-row">
          <img className="w-16 h-16 rounded-full" src={avatar_url} alt={name} />
          <div className="flex flex-col ml-4 justify-center">
            <div className="text-xl font-bold">{name}</div>
            <div className="text-sm font-extralight text-gray-500">
              @{twitter_username}
            </div>
          </div>
        </div>
        <a
          className="bg-blue-700 text-white font-light text-base px-5 py-2 rounded-3xl mr-3 md:ml-10"
          href={html_url}
          target="_blank"
        >
          Visit
        </a>
      </div>
      <p className="mt-5 text-base text-center">{bio}</p>
      <p className="flex gap-2 mt-5 font-thin text-sm items-center">
        <img src={websiteLogo} alt="website_logo" />
        <a href={blog ? `https://${blog}` : '#'} target="_blank">
          {blog || 'No site...'}
        </a>
      </p>
      <p className="flex gap-2 mt-3 font-thin text-sm items-center">
        <img src={companyLogo} alt="company" />
        {company || 'No company'}
      </p>
      <p className="flex gap-2 mt-3 font-thin text-sm items-center">
        <img src={locationLogo} alt="location_logo" />
        {location || 'No location'}
      </p>
    </div>
  );
}

export default UserBio;
