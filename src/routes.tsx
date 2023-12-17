import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("./app/index"));

export default createBrowserRouter([{ path: "/", element: <HomePage /> }]);
