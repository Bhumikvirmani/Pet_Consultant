import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../component/BookAppointment.css'
const BookAppointment = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    email: '',
    illness:'',
    mobileNo:'',
    // Add more fields as needed
  });

  useEffect(() => {
    if (!doctorId) {
      console.error('doctorId is undefined');
      return;
    }

    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/allDoctorDetails/${doctorId}`);
        const data = await response.json();
        setDoctor(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctorDetails();
  }, [doctorId]);

  const handleInputChange = (e) => {
    setPatientDetails({
      ...patientDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Patient Details:', patientDetails);
  };

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-appointment">
    <h2 className="doctor-name">Book Appointment with {doctor.name}</h2>
    <p className="clinic-category">Clinic: {doctor.Clinic}</p>
    <p className="category">Category: {doctor.category}</p>
    <p className="image">
      Image: <img src={doctor.image} alt={doctor.name} />
    </p>
    <form className="appointment-form" onSubmit={handleFormSubmit}>
      <label htmlFor="name" className="label">Name:</label>
      <input type="text" name="name" id="name" value={patientDetails.name} onChange={handleInputChange} required className="input-field" />
      <br />
      <label htmlFor="email" className="label">Email:</label>
      <input type="email" name="email" id="email" value={patientDetails.email} onChange={handleInputChange} required className="input-field" />
      <br />
      <label htmlFor="illness" className="label">Illness:</label>
      <input type="text" name="illness" id="illness" value={patientDetails.illness} onChange={handleInputChange} required className="input-field" />
      <br />
      <label htmlFor="mobileNo" className="label">Mobile Number:</label>
      <input type="tel" name="mobileNo" id="mobileNo" value={patientDetails.mobileNo} onChange={handleInputChange} required className="input-field" />
      <br />
      {/* Add more fields as needed */}
      <button type="submit" className="submit-button">Book Appointment</button>
    </form>
  </div>
  );
};

export default BookAppointment;

