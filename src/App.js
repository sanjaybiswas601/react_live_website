import React, { useEffect, useState } from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route,useRoutes } from 'react-router-dom';
import About from './pages/About'
import Service from './pages/Service'
import Contacts from './pages/Contacts'
import SignUp_Page from './pages/SignUp_Page';
import Login_Page from './pages/Login_Page';
import { auth } from './components/Firebase';


const App = (props) => {
  const [userLoggedIn,setUserLoggedIn] = useState(false)
  const routes = useRoutes([
    { path: '/', element: <Home userLoggedIn={userLoggedIn}/>},
    { path: '/about', element: <About /> },
    { path: '/service', element: <Service /> },
    { path: '/contact', element: <Contacts /> },
    { path: '/signup', element: <SignUp_Page /> },
    { path: '/login', element: <Login_Page /> }
]);
  return (
    routes
  )
}

export default App