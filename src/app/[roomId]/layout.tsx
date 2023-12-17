import { Outlet } from "react-router";

import Navbar from "./_components/navbar";

export default function RoomLayout() {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="px-6 py-4 flex-1">
        <Outlet />
      </div>
    </div>
  );
}
