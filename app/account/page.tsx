import { auth } from "../lib/auth";

export const metadata = {
  title: "Login",
};

async function Page(): Promise<JSX.Element> {
  const session = await auth();
  console.log(session);
  const firstName = session?.user?.name!.split(" ").at(0);

  return <h1 className="text-xl text-accent-500">Welcome, {firstName} !</h1>;
}

export default Page;
