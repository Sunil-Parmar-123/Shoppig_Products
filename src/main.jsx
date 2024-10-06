import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import { Provider } from "react-redux";
import { store } from "./Slice/ReduxReducerProducts.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import AddCartDetails from "./Components/AddCartDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addCartDetail",
        element: <AddCartDetails/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
