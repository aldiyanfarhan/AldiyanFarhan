import { useRoutes } from "react-router-dom";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  // get auth state

  const routes = publicRoutes; // check if user is exist then return the protected routes

  const element = useRoutes(routes);

  return <>{element}</>;
};
