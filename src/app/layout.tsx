import { Outlet } from "react-router";

import Drawer from "./_components/drawer";

export default function HomeLayout() {
  return (
    <div className="flex">
      <Drawer />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
