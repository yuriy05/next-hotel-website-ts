import { UserIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

type Props = {
  name: string;
  img: string;
  id: number;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
};

function CabinCard({ cabin }: { cabin: Props }): JSX.Element {
  const { name, img, id, maxCapacity, regularPrice, discount } = cabin;
  return (
    <div className="border border-primary-800 flex">
      <Image
        src={img}
        alt={`Cabin ${name}`}
        className="border-r border-primary-800 flex-1"
      />
      <div className="flex-grow">
        <div className="pt-4 pb-5 px-7 bg-primary-700">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Cabin {name}
          </h3>
          <div className="flex gap-3 items-center mb-2">
            <UserIcon className="h-4 w-4 text-primary-600" />
            <p className="text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>
          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <a
            href={`/cabins/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Details & reservation &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;