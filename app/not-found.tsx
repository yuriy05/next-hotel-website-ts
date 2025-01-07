import Link from "next/link";

function NotFound() {
  return (
    <main className="flex h-full flex-col justify-center items-center gap-6">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <Link
        href="/"
        className="py-3 px-6 bg-accent-500 text-primary-800 inline-block text-lg hover:bg-accent-600 hover:text-primary-900 transition-all duration-300"
      >
        Go home
      </Link>
    </main>
  );
}

export default NotFound;
