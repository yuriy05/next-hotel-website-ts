import Link from "next/link";
import { auth } from "../lib/auth";

async function Navigation(): Promise<JSX.Element> {
  const session = await auth();
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li className="hover:text-accent-500 transition-colors duration-300">
          <Link href="/cabins">Cabins</Link>
        </li>
        <li className="hover:text-accent-500 transition-colors duration-300">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-accent-500 transition-colors duration-300">
          <Link href="/account" className="flex items-center gap-3">
            {session?.user?.image && (
              <img
                src={session?.user?.image}
                alt={`Avatar of ${session?.user?.name}`}
                referrerPolicy="no-referrer"
                className="h-7 rounded-full"
              />
            )}
            <span>Guest area</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
