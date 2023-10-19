import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddCart from "../Pages/AddCart/AddCart";
import MyCart from "../Pages/MyCart/MyCart";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateProduct from "../Pages/MyCart/UpdateProduct";
import BrandProducts from "../components/Brand/BrandProducts";
import BrandProductDetails from "../components/Brand/BrandProductDetails";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/brand/:brandName",
        element: <BrandProducts></BrandProducts>,
        loader: () => fetch("http://localhost:5000/product"),
      },

      {
        path: "/details/:id",
        element: <BrandProductDetails></BrandProductDetails>,
        loader: () => fetch("http://localhost:5000/product"),
      },

      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      }

    ],
  },
]);

export default router;
