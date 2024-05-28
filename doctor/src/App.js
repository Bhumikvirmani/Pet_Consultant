import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignup from './Component/LoginSignup';
import Footer from './Component/Footer/Footer';
// import Doctor from './Pages/Doctor/Doctor';
import DoctorForm from './Component/DoctorForm';
// import DoctorInformationForm from './Component/Doctor_Form';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <DoctorForm/>
      <Routes>
          <Route path='/Login' element={<LoginSignup/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App