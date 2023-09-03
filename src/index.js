import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContactUs from "./Routes/ContactUs";
import AboutUs from "./Routes/AboutUs";
import Error from "./Routes/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },

      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/restaurants/:restId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
