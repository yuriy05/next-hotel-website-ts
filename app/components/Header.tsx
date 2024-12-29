import Logo from "@/app/components/Logo";
import Navigation from "@/app/components/Navigation";

function Header(): JSX.Element {
  return (
    <header className="px-8 py-5 border-b border-primary-900">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
