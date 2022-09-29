import React from 'react';
import Login from './pages/Login/Login.jsx';
import Registration from './pages/Registration/Registration.jsx';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword.jsx';
import { BrowserRouter as Router, 
  Route,Routes,
} from "react-router-dom";


function App() {
  return (

  <Router>
    <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/registration" element={<Registration/>}/>
    <Route exact path="/forgotpassword" element={<ForgotPassword/>}/>
    </Routes>
    
  </Router>
   


  )
}

export default App
