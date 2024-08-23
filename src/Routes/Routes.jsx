import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import Checkout from "../Components/CheckOut/Checkout";
import BookingsOrder from "../Components/BookingsOrder/BookingsOrder";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkOut/:id",
        element: (
          <PrivateRoutes>
            <Checkout></Checkout>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myBookingsOrder",
        element: (
          <PrivateRoutes>
            <BookingsOrder></BookingsOrder>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
