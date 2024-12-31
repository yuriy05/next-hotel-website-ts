import CabinCard from "@/app/components/CabinCard";
import { getCabins } from "../lib/data-service";
import { Cabin } from "../types/Cabin";
import Spinner from "../components/Spinner";

export const metadata = {
  title: "Cabins",
};

async function Page(): Promise<JSX.Element> {
  let cabins: Cabin[] = await getCabins();

  return (
    <div>
      <h1 className="text-4xl mb-4 text-accent-400 font-medium">
        Our luxury cabins
      </h1>
      <p className="mb-10 text-primary-200 text-lg">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin: Cabin) => (
            <CabinCard key={cabin.id} cabin={cabin} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
