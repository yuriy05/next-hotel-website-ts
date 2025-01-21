import { signInAction } from "../lib/actions";

function SignInButton(): JSX.Element {
  return (
    <form action={signInAction}>
      <button className="flex gap-6 items-center py-4 px-10 border border-primary-300 text-lg font-medium">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
