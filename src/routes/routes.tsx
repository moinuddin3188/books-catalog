import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Books from "../pages/Books";
import BookDetails from "../pages/BookDetails";
import EditBook from "../pages/EditBook";

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
      path: "/edit-book/:id",
      element: <EditBook />,
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