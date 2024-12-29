import Image from "next/image";
import Link from "next/link";

import bg from "@/public/bg.png";

function Home() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        alt="background"
        className="object-cover object-top"
        placeholder="blur"
      />
      <div className="z-10 relative text-center">
        <h1
          className="text-8xl mb-10 text-primary-50 font-normal trancking-tight
        "
        >
          Welcome to paradise
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 text-primary-800 text-lg px-8 py-6 font-semibold hover:bg-accent-600 transition-all duration-300"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}

export default Home;
