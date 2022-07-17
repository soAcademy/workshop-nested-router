import { useRoutes, Outlet } from "react-router-dom"
import Home from './Pages/Home'
import Detail from './Pages/Detail'

const AppRoutes = () =>(
  useRoutes([
    { path: "/", element: <Home /> },
    // Add path for others component here
    { 
      path: "/detail", element: (
        <>
          <Detail />
          <Outlet />
        </>
      ),
      children: [
        // Add path for detail one and detail two component here
      ]
    },
  ]))

export default AppRoutes
