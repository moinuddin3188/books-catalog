import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Books from "../pages/Books";
import BookDetails from "../pages/BookDetails";
import EditBook from "../pages/EditBook";
import AddBook from "../pages/AddBook";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    element: (
      <ProtectedRoute>
        <EditBook />
      </ProtectedRoute>
    ),
  },
  {
    path: "/add-new-book",
    element: (
      <ProtectedRoute>
        <AddBook />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <Signup />
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
