import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Child from './Components/Child/Child';
import Gallry from './Components/Gallry/Gallry';
import Notfound from './Components/Notfound/Notfound';
import Web from './Components/Web/Web';
import Mobile from './Components/Mobile/Mobile';

let routers = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { index:true , element: <Home /> },
      { path: 'About', element: <About /> },
      { path: 'Contacts', element: <Contacts /> },
      { path: 'Child', element: <Child />},
      { path: 'gallry', element: <Gallry /> , 
        children:[
        {index: true, element: <Web/> },
        {path: 'Web' , element: <Web/> },
        {path: 'Mobile' , element: <Mobile/> },
      ] } ,
      { path: '*', element: <Notfound /> } 
    ]
  }
]);

export default function App() {
  return <RouterProvider router={routers}></RouterProvider>;
}