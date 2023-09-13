import { lazyImport } from "../../utils/lazyImport";

// Import routes lazily here
const { Landing } = lazyImport(() => import("../../features/misc"), "Landing");
const { Login } = lazyImport(() => import("../../features/auth"), "Login");
// const { ContactMe } = lazyImport(
//   () => import("../../features/contactMe"),
//   "ContactMe"
// );

export const publicRoutes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //   path: "/contact-me",
  //   element: <ContactMe />,
  // },
];
