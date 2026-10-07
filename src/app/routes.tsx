import { createBrowserRouter } from "react-router";
import Home from "./Home";
import ProjectPage from "./ProjectPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/projects/:slug",
    Component: ProjectPage,
  },
  {
    path: "*",
    Component: Home,
  },
]);
