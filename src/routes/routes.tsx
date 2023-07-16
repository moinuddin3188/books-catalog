import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Books from "../pages/Books";
import BookDetails from "../pages/BookDetails";
import EditBook from "../pages/EditBook";
import AddBook from "../pages/AddBook";
import NotFound from "../pages/NotFound";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <App />
      </PublicRoute>
    ),
  },
  {
    path: "/all-books",
    element: (
      <PublicRoute>
        <Books />
      </PublicRoute>
    ),
  },
  {
    path: "/book-details/:id",
    element: (
      <PublicRoute>
        <BookDetails />
      </PublicRoute>
    ),
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
    path: "/book/add-book",
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
