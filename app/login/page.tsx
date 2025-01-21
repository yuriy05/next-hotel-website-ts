import SignInButton from "../components/SignInButton";

function Login(): JSX.Element {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h1 className="text-3xl font-semibold">Sign in to access this page</h1>
      <SignInButton />
    </div>
  );
}

export default Login;
