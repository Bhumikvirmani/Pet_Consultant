import React, { useState, useEffect } from 'react';
import './Carddoctor.css';
import { Link } from 'react-router-dom';
import BookAppointment from './BookAppointment';

const DoctorCards = () => {
  const [doctors, setDoctors] = useState([]);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await fetch('http://localhost:4000/allDoctorDetails');
      const data = await response.json();
      const doctorsData = data;
      const categoriesData = {};

      doctorsData.forEach(doctor => {
        const category = doctor.category;
        if (!categoriesData[category]) {
          categoriesData[category] = [];
        }
        categoriesData[category].push(doctor);
      });

      setDoctors(doctorsData);
      setCategories(categoriesData);
    };

    fetchDoctors();
  }, []);

  return (
    <div className="doctor-cards-container">
         
      {Object.keys(categories).map(category => (
       
        <div key={category} className="category-container">
          <h2>{category} Specialist</h2>
          {categories[category].map(doctor => (
            //  <Link to={`/BookAppointment?doctorId=${doctor._id}`}>
            <div key={doctor._id} className="doctor-card">
              <img src={doctor.image} alt={doctor.name} />
              <h5>{doctor.Clinic}</h5>
              <h3>{doctor.name}</h3>
              <Link to={`/BookAppointment/${doctor._id}`}>
                <button>Book Now</button>
              </Link>
            </div>
            // </Link>
            
          ))}
        </div>
        
      ))}
    </div>
  );
};

export default DoctorCards;

