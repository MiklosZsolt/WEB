import React, { useState, useEffect } from 'react';
import httpClient from './httpClient';
import './style.css';

const Program = ({ idUtilizator }) => {
  const [dataProgramare, setDataProgramare] = useState('');
  const [idProprietate, setIdProprietate] = useState('');
  const [mesajEroare, setMesajEroare] = useState('');

  const handleDataChange = (event) => {
    setDataProgramare(event.target.value);
  }

  const handleSelectChange = (event) => {
    setIdProprietate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!idProprietate || !dataProgramare) {
      setMesajEroare('Toate câmpurile sunt obligatorii');
      return;
    }
  
    const data = new Date(dataProgramare);
    if (data.getHours() < 9 || data.getHours() > 20 || data.getMinutes() !== 30) {
      setMesajEroare('Programarea trebuie să fie între ora 9 și 20:00, cu minutul fix 30.');
      return;
    }
  
    try {
      const response = await httpClient.get(`/programari/verifica?id_utilizator=${idUtilizator}&data=${dataProgramare}`);
      console.log(idUtilizator)
      const data = response.data;
      console.log(data.existaProgramare)
  
      if (data.existaProgramare) {
        setMesajEroare('Există deja o programare pentru această dată și oră.');
      } else {
        await httpClient.post('/programari', { id_proprietate: idProprietate, data: dataProgramare }, { headers: { 'X-User-Id': idUtilizator } });
        console.log( { headers: { 'X-User-Id': idUtilizator } })
        console.log('Programarea a fost salvată cu succes!');
        alert('Programarea a fost salvată cu succes!');
      }
    } catch (error) {
      console.log(error);
      setMesajEroare('A apărut o eroare la verificarea programării. Vă rugăm încercați din nou.');
    }
  };
  
  
  
  
  // const verificaProgramariExistente = async (idUtilizator, dataProgramare) => {
  //   const response = await httpClient.get('/programari/verifica', {
  //     params: {
  //       id_utilizator: idUtilizator,
  //       data_programare: dataProgramare,
  //     },
  //   });
  
  //   if (response.data.existaProgramare) {
  //     throw new Error('Există deja o programare pentru această dată și oră.');
  //   }
  
  //   return true;
  // };

  const DropdownAdreseProprietati = () => {
    const [adrese, setAdrese] = useState([]);

    useEffect(() => {
      httpClient
        .get("/proprietati/adrese")
        .then((response) => {
          setAdrese(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    

    return (
      <div className="page">
        <h1>Programare vizită</h1>
        <div className="form-wrapper">
          <form className="programare-wrapper" onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="proprietati">Alegeți proprietatea:</label>
                  </td>
                  <td>
                    <select onChange={handleSelectChange} value={idProprietate}>
                      <option value="">Selectează o adresă</option>
                      {adrese.map((adresa, index) => (
                        <option key={index} value={adresa.id}>{adresa.adresa}</option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="dataProgramare">
                      Alegeți data programării:
                    </label>
                  </td>
                  
                  <td>
                    <input
                      type="datetime-local"
                      id="dataProgramare"
                      name="dataProgramare"
                      onChange={handleDataChange}
                      value={dataProgramare}
                      required
                    />
                  </td>
                </tr>
                {mesajEroare && (
                  <tr>
                    <td colSpan="2" style={{ color: "red" }}>
                     

                      {mesajEroare}
                    </td>
                  </tr>
                )}
                <tr>
                  <td colSpan="2">
                    <button type="submit">Programați vizita</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  };

  return <DropdownAdreseProprietati />;
};

export default Program;