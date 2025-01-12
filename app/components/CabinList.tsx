import CabinCard from "./CabinCard";

import { getCabins } from "@/app/lib/data-service";
import { Cabin } from "@/app/types/Cabin";

async function CabinList({ filter }: { filter: string }): Promise<JSX.Element> {
  const cabins: Cabin[] = await getCabins();

  let displayedCabins;

  if (filter === "all") {
    displayedCabins = cabins;
  }

  if (filter === "small") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  }

  if (filter === "medium") {
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
    );
  }

  if (filter === "large") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  }

  return (
    <>
      {cabins.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {displayedCabins?.map((cabin: Cabin) => (
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
