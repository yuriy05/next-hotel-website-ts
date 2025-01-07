"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

function Error({ error, reset }: ErrorProps) {
  return (
    <main className="flex flex-col h-full justify-center items-center gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong</h1>
      <p className="text-lg">{error.message}</p>
      <button
        className="py-3 px-6 bg-accent-500 text-primary-800 inline-block text-lg hover:bg-accent-600 hover:text-primary-900 transition-all duration-300"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}

export default Error;
