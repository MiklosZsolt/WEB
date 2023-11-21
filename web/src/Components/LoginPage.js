import React, { useState, useEffect } from 'react';
import httpClient from './httpClient';
import './LoginPage.css';



const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const logInUser = async () => {
    console.log(email, password);

    try {
      const resp = await httpClient.post("//localhost:5000/login", {
        email,
        password,
      });

      setUser(resp.data);

      if (resp.data.rol === "users") {
        window.location.href = "/Client";
      }
      if (resp.data.rol === "agent") {
        window.location.href = "/Agent";
      }

    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Invalid credentials");
      }
    }
  };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const resp = await httpClient.get('//localhost:5000/@me');
  //       setUser(resp.data);
  //     } catch (error) {
  //       console.log('Not authenticated');
  //     }
  //   })();
  // }, []);

  return (
    <div className="login-container login-page">
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={() => logInUser()}>Login</button>
      </form>
      

    </div>
  );
      }


export default LoginPage;
