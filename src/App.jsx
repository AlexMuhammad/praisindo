import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Notification from "./pages/Notification"
import Account from "./pages/Account"
import Product from "./pages/Product"
import Transaction from "./pages/Transaction"
import Portfolio from "./pages/Portfolio"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/notification",
          element: <Notification />
        },
        {
          path: "/profile",
          element: <Account />
        },
        {
          path: "/product",
          element: <Product />
        },
        {
          path: "/transaction",
          element: <Transaction />
        },
        {
          path: "/portfolio",
          element: <Portfolio />
        },
      ]
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
