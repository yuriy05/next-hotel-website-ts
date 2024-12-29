import SideNavgation from "../components/SideNavigation";

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavgation />
      <div className="py-1">{children}</div>
    </div>
  );
}

export default Layout;
