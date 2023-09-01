import './App.css';
import ButtonAppbar from "./components/navbar/Navbar"
import Home from "./components/pages/home/Home"
import Appointment from "./components/pages/appointment/Appointment"
import DoctorList from "./components/pages/doctorList/DoctorList"
import About from "./components/pages/about/About"

import ProfileSettings from "./components/pages/profileSettings/ProfileSettings"
import Settings from "./components/pages/settings/Settings"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  sum(3,5);
  function sum(a,b) {
    console.log(a,b)
  }

  return (
    <Router>
      <div className="App">

        <ButtonAppbar></ButtonAppbar>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/appointment" element={<Appointment />}></Route>
          <Route path="/doctorList" element={<DoctorList />}></Route>
          <Route path="/about" element={<About />}> </Route>

          <Route path="/profileSettings" element={<ProfileSettings />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
