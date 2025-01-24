import Spinner from "./components/Spinner";

function Loader(): JSX.Element {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
    </div>
  );
}

export default Loader;
