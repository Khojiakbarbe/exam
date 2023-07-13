
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import SinglePost from './Single'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/single/:id',
      element: <SinglePost />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App