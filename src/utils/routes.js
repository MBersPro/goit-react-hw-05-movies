import { lazy } from "react";
export const routes = [
  {
    name: "Home",
    path: "/",
    component: lazy(() => import("../components/pages/homePage/HomePage")),
    exact: true,
  },
  {
    name: "Movies",
    path: "/movies",
    component: lazy(() => import("../components/pages/moviesPage/MoviesPage")),
    exact: false,
  },
];
