import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./components/layoutes/Routlayoutes"
import Home from "./components/Home"
import Login from "./components/pages/login/login"
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="Section1" element={<Home />} />
      <Route path="Section2" element={<Home />} />
      <Route path="Section3" element={<Home />} />
      <Route path="Section4" element={<Home />} />
      <Route path="Section5" element={<Home />} />
      <Route path="Section6" element={<Home />} />
    </Route>
  ))

  return (
    <div className="appjsx">
      <RouterProvider router={router} />
    </div>
  )
}

export default App