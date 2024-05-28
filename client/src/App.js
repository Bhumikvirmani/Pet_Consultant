import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import BookAppointment from './component/BookAppointment';
import Signup from './component/Signup';
import QA from './component/QA';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Footer from './component/Footer/Footer';
import DoctorDetails from './Pages/DoctorDetails';



function App() {
  return (
    <>
     <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Doctordetails' element={<DoctorDetails/>}/>
          <Route path='/Login' element={<Login />} />
          <Route path='/About' element={<About />} />
          <Route path='/QA' element={<QA />} />
          <Route path="/BookAppointment/:doctorId" element={<BookAppointment />} />
        </Routes>
        <Footer/>
  </div>
    </>
  );
}

export default App;