import Link from "next/link";

function LoginMessage(): JSX.Element {
  return (
    <div className="relative grid">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-800 via-primary-900 to-primary-950/60 backdrop-blur-sm z-0"></div>
      <p className="text-center text-xl self-center py-12 backdrop-blur-0">
        Please{" "}
        <Link href="/login" className="underline text-accent-500">
          login
        </Link>{" "}
        to reserve this
        <br />
        cabin right now
      </p>
    </div>
  );
}

export default LoginMessage;
