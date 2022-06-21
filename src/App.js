import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route,useRoutes } from 'react-router-dom';
import About from './pages/About'
import Service from './pages/Service'
import Contacts from './pages/Contacts'


const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/service', element: <Service /> },
    { path: '/contact', element: <Contacts /> }
]);
  return (
    routes
  )
}

export default App