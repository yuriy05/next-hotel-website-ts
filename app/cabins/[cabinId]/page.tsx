import { Suspense } from "react";
import Reservation from "@/app/components/Reservation";
import Spinner from "@/app/components/Spinner";
import Cabin from "@/app/components/Cabin";
import { getCabin, getCabins } from "@/app/lib/data-service";

export async function generateMetadata({
  params,
}: {
  params: { cabinId: string };
}) {
  const { name } = await getCabin(params.cabinId);

  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  return ids;
}

async function Page({
  params,
}: {
  params: { cabinId: string };
}): Promise<JSX.Element> {
  // PLACEHOLDER DATA

  const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-5 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;
