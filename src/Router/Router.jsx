import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddCart from "../Pages/AddCart/AddCart";
import MyCart from "../Pages/MyCart/MyCart";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateProduct from "../Pages/MyCart/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <AddCart></AddCart>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`),
      },
    ],
  },
]);

export default router;
