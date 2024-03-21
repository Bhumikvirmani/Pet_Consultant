import React, { useState } from 'react';
import './PetAppointmentForm.css';

function PetAppointmentForm() {
    const [locationDetails, setLocationDetails] = useState('');

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    // Geocoding using Google Maps API
                    const geocoder = new window.google.maps.Geocoder();
                    const latlng = new window.google.maps.LatLng(latitude, longitude);

                    geocoder.geocode({ 'location': latlng }, (results, status) => {
                        if (status === 'OK') {
                            if (results[0]) {
                                const address = results[0].formatted_address;
                                setLocationDetails(`Location: ${address}`);
                            } else {
                                setLocationDetails('Address not found.');
                            }
                        } else {
                            setLocationDetails(`Geocoding failed: ${status}`);
                        }
                    });
                },
                (error) => {
                    setLocationDetails(`Error getting location: ${error.message}`);
                    console.error(error);
                }
            );
        } else {
            setLocationDetails('Geolocation is not supported by this browser.');
        }
    };

    return (
        <div className="container">
            <h2>Pet Appointment Form</h2>
            <div className="form-container">
                <label htmlFor="userName">
                    <i className="fa fa-user icon"></i>User Name
                </label>
                <input type="text" id="userName" name="userName" placeholder="Enter your name" />

                {/* Rest of the form goes here */}

                <label htmlFor="location">Choose Location</label>
                <i className="fa fa-location"></i>
                <button className="geo-btn" onClick={getUserLocation}>Show User Location</button>
                <p className="showDetails" id="locationDetails">{locationDetails}</p>

                {/* Rest of the form goes here */}
            </div>
        </div>
    );
}

export default PetAppointmentForm;
