import Link from "next/link";

function Logo(): React.ReactElement {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <img height="60" width="60" alt="The Wild Oasis logo" src="/logo.png" />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
