import Link from "next/link";

function NotFound() {
  return (
    <main className="flex h-full flex-col justify-center items-center gap-6">
      <h1 className="text-3xl font-semibold">Cabin does not exist</h1>
      <Link
        href="/cabins"
        className="py-3 px-6 bg-accent-500 text-primary-800 inline-block text-lg hover:bg-accent-600 hover:text-primary-900 transition-all duration-300"
      >
        Go to cabins
      </Link>
    </main>
  );
}

export default NotFound;
