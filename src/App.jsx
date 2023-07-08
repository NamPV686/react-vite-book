import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/pages/Layout/Layout';
import NotFound from './components/Routers/NotFount';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import Book from './components/pages/Book/Book';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "book",
          element: <Book />,
        }
      ],
    },
    
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
