import { createBrowserRouter } from "react-router-dom";
import { DashboardPage, SignIn, SignUp } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
]);

export default router;
