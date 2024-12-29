import Link from "next/link";

function Navigation(): JSX.Element {
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
          <Link href="/account">Guest area</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
