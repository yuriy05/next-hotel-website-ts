import Link from "next/link";

function Navigation(): React.ReactElement {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li className="hover:text-accent-500 transition-colors duration-300">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-accent-500 transition-colors duration-300">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-accent-500 transition-colors duration-300">
          <Link href="/cabins">Cabins</Link>
        </li>
        <li className="hover:text-accent-500 transition-colors duration-300">
          <Link href="/account">Account</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
