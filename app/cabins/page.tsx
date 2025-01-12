import { Suspense } from "react";

import Spinner from "@/app/components/Spinner";
import CabinList from "@/app/components/CabinList";
import FilterCabins from "../components/FilterCabins";

export const metadata = {
  title: "Cabins",
};

function Page({
  searchParams,
}: {
  searchParams: { capacity: string };
}): JSX.Element {
  const filter = searchParams?.capacity ?? "all";
  return (
    <div>
      <h1 className="text-4xl mb-4 text-accent-400 font-medium">
        Our luxury cabins
      </h1>
      <p className="mb-10 text-primary-200 text-lg">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-3">
        <FilterCabins />
      </div>
      <Suspense fallback={<Spinner />}>
        <CabinList filter={filter} key={filter} />
      </Suspense>
    </div>
  );
}

export default Page;
