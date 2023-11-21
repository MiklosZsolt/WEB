import React, { useState, useEffect, useRef } from 'react';
import httpClient from './httpClient';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from "react-router-dom";

import './Profile.css'

const LoginPage = () => {
  const [user, setUser] = useState({
    id: '',
    email: '',
    rol: '',
    nume: '',
    prenume: ''
  });
  const [location, setLocation] = useState(null);
  const mapRef = useRef(null);
  const [preference1, setPreference1] = useState('');
  const [preference2, setPreference2] = useState('');

  const handlePreference1Change = (event) => {
    setPreference1(event.target.value);
  }

  const handlePreference2Change = (event) => {
    setPreference2(event.target.value);
  }

  const handleSaveClick = async () => {
    try {
      await httpClient.post(`//localhost:5000/users/${user.id}/preferences`, { preference1: preference1, preference2: preference2 });

      console.log('Preferences saved successfully');
    } catch (error) {
      console.error('Error saving preferences', error);
    }
};

  const logoutUser = async () => {
    await httpClient.post("//localhost:5000/logout");
    window.location.href = "/";
  };

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get('//localhost:5000/@me');
        setUser(resp.data);
      } catch (error) {
        return window.location.href = '/login';
      }

      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });

            httpClient.post('//localhost:5000/location', { latitude, longitude });
          });
        } else {
          console.log('Geolocation is not supported by this browser.');
        }
      } catch (error) {
        console.log('Error getting location:', error);
      }
    })();
  }, []);

  const makeAppointment = () => {
    console.log('Button clicked');
  };
  

  useEffect(() => {
    if (location) {
      if (!mapRef.current) {
        const map = L.map('map').setView([location.latitude, location.longitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
          maxZoom: 18,
        }).addTo(map);

        L.marker([location.latitude, location.longitude]).addTo(map)
          .bindPopup('You are here!')
          .openPopup();

        mapRef.current = map;
      } else {
        const map = mapRef.current;
        map.setView([location.latitude, location.longitude]);
        L.marker([location.latitude, location.longitude]).addTo(map)
          .bindPopup('You are here!')
          .openPopup();
      }
    }
  }, [location]);
  return (
    <>
      <div className="profile-container">
        <br></br>
        {user.id ? (
          
          <div className="user-info">
            
            <div className="label">
      
              <span className="bullet">•</span> First Name:
            </div>
            <div className="value">{user.nume}</div>
            <div className="label">
              <span className="bullet">•</span> Last Name:
            </div>
            <div className="value">{user.prenume}</div>
            <div className="label">
              <span className="bullet">•</span> Email:
            </div>
            <div className="value">{user.email}</div>
            <div className="label">
  <span className="bullet">•</span> Preference 1:
</div>
<div className="preference-container">
  <select name="preference1" onChange={handlePreference1Change}>
    <option value="">Select an option</option>
    <option value="casa">House</option>
    <option value="apartament">Apartment</option>
  </select>
  <button className="standard-button" onClick={handleSaveClick}>
    Save
  </button>
</div>
<div className="label">
  <span className="bullet">•</span> Preference 2:
</div>
<div className="preference-container">
  <select name="preference2" onChange={handlePreference2Change}>
    <option value="">Select an option</option>
    <option value="buy">Buy</option>
    <option value="rent">Rent</option>
  </select>
  <button className="standard-button" onClick={handleSaveClick}>
    Save
  </button>
</div>
          </div>
        ) : (
          <h1>My profil</h1>
        )}
        {location && (
          <div className="location-info">
            <div className="label">
        
            </div>
       
            <div className="label">
         
            </div>
       
            <Link to="/Program" className="no-underline">
  <button className="standard-button">Program</button>
</Link>
  <button className="standard-button" onClick={logoutUser}>
    Logout
  </button>
</div>
        )}
      </div>
      <div>
        {<center><div id="map" style={{ height: "400px", width: "50%" }}></div></center>}
      </div>
    </>
  );
};

export default LoginPage;
