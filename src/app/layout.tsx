import Drawer from "./_components/drawer";

export interface HomeLayoutProps extends React.PropsWithChildren {}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Drawer />
      <main>{children}</main>
    </>
  );
}
