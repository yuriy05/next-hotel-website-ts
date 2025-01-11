import CabinCard from "./CabinCard";

import { getCabins } from "@/app/lib/data-service";
import { Cabin } from "@/app/types/Cabin";

async function CabinList(): Promise<JSX.Element> {
  const cabins: Cabin[] = await getCabins();

  return (
    <>
      {cabins.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin: Cabin) => (
            <CabinCard key={cabin.id} cabin={cabin} />
          ))}
        </div>
      ) : (
        <p className="text-xl text-accent-500">No cabins data yet...</p>
      )}
    </>
  );
}

export default CabinList;
