import React, { useState, useEffect } from "react";
import './App.css';



function App() {
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`
  //const client = process.env.REACT_APP_API_KEY;
  
  const [ip, setIp] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setIp(data)
        setLocation(data)
      })
  }, [url])

    return (
      < div className="App" >
        <header className="App-header">
          <h1>Welcome to WhatsmyIP</h1>
          <h2>This is your IP Adress: {ip && ip.ip}</h2>
          <h3>Your location is: {location && location.location.city}</h3>
        </header>
      </div>
    );
  }


export default App;
