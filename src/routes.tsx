import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// Loaders
import homeLoader from "./app/loader";

// Pages
const HomePage = lazy(() => import("./app/index"));

export default createBrowserRouter([{ path: "/", element: <HomePage />, loader: homeLoader }]);
