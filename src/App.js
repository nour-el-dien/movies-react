import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import Contacts from './Components/Contacts/Contacts';
import Child from './Components/Child/Child';
import Gallry from './Components/Gallry/Gallry';
import Notfound from './Components/Notfound/Notfound';
import Web from './Components/Web/Web';
import Mobile from './Components/Mobile/Mobile';
import Tv from './Components/Tv/Tv';
import Games from './Components/Games/Games';
import Register from './Components/register/register';  



// let routers = createBrowserRouter ([ 
let routers = createHashRouter ([
  
  {
    path: '',
    element: <Layout />,children: [
      { index:true , element: <Home />},
      { path: 'Movies', element: <Movies /> }, 
      { path: 'Games', element: <Games /> }, 
      { path: 'Tv', element: <Tv /> },
      { path: 'Contacts', element: <Contacts /> },
      { path: 'register', element: <Register /> },
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
