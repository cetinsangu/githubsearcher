import { MostUsedLangs } from './Charts/MostUsedLangs';

function Repos() {
  return (
    <div className="grid md:grid-cols-2 md:gap-5 w-[90vw] pt-8 mx-auto max-w-screen-xl">
      <div className="mt-10 relative container p-5 rounded-tl-none rounded-xl flex items-center justify-center bg-white font-roboto before:content-['Most_Used_Languages'] before:absolute before:top-0 before:left-0 before:-translate-y-full before:text-black before:bg-white before:px-5 before:py-1 before:border before:rounded-t-lg before:font-light">
        <MostUsedLangs />
      </div>
    </div>
  );
}
export default Repos;
