import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Loaders
import roomLoader from "./app/[roomId]/loader";
import homeLoader from "./app/loader";

// Layouts
const RoomLayout = lazy(() => import("./app/[roomId]/layout"));
const HomeLayout = lazy(() => import("./app/layout"));

// Pages
const HomePage = lazy(() => import("./app/index"));
const RoomPage = lazy(() => import("./app/[roomId]"));

export default createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<></>}>
        <HomeLayout />
      </Suspense>
    ),
    loader: homeLoader,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/rooms/:roomId",
        element: (
          <Suspense fallback={<></>}>
            <RoomLayout />
          </Suspense>
        ),
        loader: roomLoader,
        children: [{ path: "/rooms/:roomId", element: <RoomPage />, loader: roomLoader }],
      },
    ],
  },
]);
