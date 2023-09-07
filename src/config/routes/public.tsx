import { lazyImport } from "../../utils/lazyImport";

// Import routes lazily here
const { Landing } = lazyImport(() => import("../../features/misc"), "Landing");
const { Login } = lazyImport(() => import("../../features/auth"), "Login");

export const publicRoutes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
