import React, { Component } from 'react';
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

export default class Agent extends Component {
  logoutUser = async () => {
    await httpClient.post('/logout');
    window.location.href = '/';
  };

  render() {
    return (
      <div className="page">
        <h1 className="text">Pagina agentului</h1>
        <button onClick={this.logoutUser}>Logout</button>
      </div>
    );
  }
}
