
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './Layout/Router'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Products from './Components/Prodcuts/ProductsPage/Products'
import Cart from './Components/CartPage/Cart'
import Thanks from './Components/Thanks'
import Register from './Components/Account/Register'
import Login from './Components/Account/Login'
import PrivateRouter from './PrivateRouter/PrivateRouter'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Router></Router>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: async () => {
            return fetch('products.json')
          }
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/shop',
          element: <Products></Products>,
          loader: async () => {
            return fetch('products.json')
          }
        },
        {
          path: '/cart',
          element: <PrivateRouter><Cart></Cart></PrivateRouter>,
          loader: async () => {
            return fetch('products.json')
          }
        },
        {
          path: '/thanks',
          element: <Thanks></Thanks>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
