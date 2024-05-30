import { createBrowserRouter } from "react-router-dom";
import { DashboardPage, SignUp, LogInPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <LogInPage />,
  },
]);

export default router;
