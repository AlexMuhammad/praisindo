import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"

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
        }
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
