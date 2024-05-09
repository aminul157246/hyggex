import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/Layout';
import Home from './page/Home/Home';
import Flashcard from './page/Flashcard/Flashcard';
import Contact from './page/Contact/Contact';
import Question from './page/question/Question';
import Login from './page/Home/Login/Login';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/flashCard',
        element: <Flashcard />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/faq',
        element: <Question />
      },
      {
        path: '/login',
        element: <Login />
      },
    ]
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-5xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
