import React, { useState } from 'react';
import httpClient from './httpClient';
import './RegisterPage.css';

const RegisterPage = () => {
  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    console.log(nume, prenume, email, password);

    try {
      const resp = await httpClient.post("//localhost:5000/register", {
        nume,
        prenume,
        email,
        password,
      });
      window.location.href = "/Client"
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Invalid credentials");
      }
    }
  }

  return (
    <div className='RegisterPage'>
      <h2>Create account</h2>
      <form>
        <div className='form-group'>
          <label htmlFor='nume'>First Name:</label>
          <input type='text' id='nume' name='nume' required value={nume} onChange={(e) => setNume(e.target.value)} />
        </div>
        <div className='form-group'>
          <label htmlFor='prenume'>Last Name:</label>
          <input type='text' id='prenume' name='prenume' required value={prenume} onChange={(e) => setPrenume(e.target.value)} />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' name='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type='button' onClick={() => registerUser()}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
