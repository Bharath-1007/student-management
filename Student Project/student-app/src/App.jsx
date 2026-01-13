import Dashboard from "./Dashboard";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Register from "./Register";
import RoleAccess from "./RoleAccess";
import NewForm from "./NewForm";
import History from "./History";
import Status from "./Status";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <RoleAccess /> },
    { path: "/:role/login", element: <Login /> },
    { path: "/:role/register", element: <Register /> },
    { path: "/:role/forgotpassword", element: <ForgotPassword /> },

    {
      path: ":role/dashboard",
      element: <Dashboard />,
      children: [
        { path: "newform", element: <NewForm /> },
        { path: "history", element: <History /> },
        { path: "status", element: <Status /> },
        
      ],
    },

    {
      path: ":role/dashboard",
      element: <Dashboard />,
      children: [
        { path: "OD Request", element: <NewForm /> },
        { path: "history", element: <History /> },
        { path: "settings", element: <Status /> },
        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
