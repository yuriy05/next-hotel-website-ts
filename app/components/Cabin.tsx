import Image from "next/image";
import TextExpander from "./TextExpander";

import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import { Cabin } from "../types/Cabin";

function Cabin({ cabin }: { cabin: Cabin }): JSX.Element {
  //TODO regularPrice and discount should be destructured in the future
  const { name, maxCapacity, image, description } = cabin;

  return (
    <div className="grid grid-cols-1 gap-10 lg:gap-20 border border-primary-800 py-3 px-10 mb-24 lg:grid-cols-[3fr_4fr]">
      <div className="relative lg:scale-[1.15] min-h-[450px] lg:-translate-x-3 mx-[-40px] my-[-12px]">
        <Image
          fill
          className="object-cover"
          src={image}
          alt={`Cabin ${name}`}
        />
      </div>

      <div>
        <h3 className="text-accent-100 font-black text-7xl mb-5 lg:translate-x-[-254px] bg-primary-950 lg:p-6 pb-1 lg:w-[150%]">
          Cabin {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
