import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Books from "../pages/Books";
import BookDetails from "../pages/BookDetails";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/all-books",
      element: <Books />,
    },
    {
      path: "/book-details/:id",
      element: <BookDetails />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

export default routes