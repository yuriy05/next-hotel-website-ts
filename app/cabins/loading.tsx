import Spinner from "../components/Spinner";

function Loading(): JSX.Element {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-accent-500">Loading cabins data...</p>
    </div>
  );
}

export default Loading;
