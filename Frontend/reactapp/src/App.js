import React from 'react'
import Header from './Components/Header';
import Logout from './Components/Logout';
import Landingpage from './Components/Landingpage';
import Login from './Components/Login';
import Patientheader from './Components/Patientheader';
import Viewmyappointments from './Components/Viewmyappointments';
import Registeradmin from './Components/Registration';
import Registration from './Components/Registration';
import Doctorheader from './Components/Doctorheader';

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Aboutus from './Components/Aboutus';




function App() {
  return (
    <div style={{overflowX:'hidden'}}>
      
     <Router>
  
      <Doctorheader />
   <Routes>
   <Route path='/' exact Component={Landingpage } />
   <Route path='/about' exact Component={Aboutus } />
   <Route path='/patient' exact Component={Viewmyappointments } />
   <Route path='/logout' exact Component={Logout } />
  
    </Routes>
    </Router> 
    </div>
  )
}

export default App