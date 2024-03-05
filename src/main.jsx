import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Containers/Home';
import About from './Containers/About';
import Resume from './Containers/Resume';
import Contact from './Containers/Contact';
import Skills from './Containers/Skills';
import Portfolio from './Containers/Portfolio';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path:"/home",
        element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:"/resume",
          element:<Resume/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/skills",
          element:<Skills/>
        },
        {
          path:"/portfolio",
          element:<Portfolio/>
        }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
