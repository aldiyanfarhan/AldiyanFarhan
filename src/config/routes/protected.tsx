import { lazyImport } from "../../utils/lazyImport";

// Import routes lazily here

const Console = () => {
  return <></>; // return console layout with outlet as children
};

export const protectedRoutes = [
  {
    path: "/console",
    element: <Console />, // console layout
    children: [], // children of console layout
  },
];
