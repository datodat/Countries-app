import React, { useState, useEffect } from 'react';
// Css
import './App.css';
// Axios
import axios from 'axios';
// Components
import Card from './components/Card';

const colors = ['#eeeeee', '#ffffff', '#3b3f52', '#272a39'];

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then(res => setCountries(res.data))
      .catch(error => console.log(error.message))
  }, [])

  return (
    <div className='container' style={{ backgroundColor: darkMode ? colors[3] : colors[1], color: darkMode ? 'white' : 'black' }}>
      <header className='header' style={{ backgroundColor: darkMode ? colors[2] : colors[0] }}>
        <h1>Where in the world?</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          <i className="fa-solid fa-moon icon-dark"></i>
          <i className="fa-solid fa-brightness icon-light"></i>
          Dark Mode
        </button>
      </header>
      <div className='body-container'>
        <div className='search-div'>
          <div className='input-div'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type='text' placeholder='Search for a country...' />
          </div>
          <div className='dropdown-div'>
            <input list="browsers" placeholder='Filter by Region:' />
            <datalist id="browsers">
              <option value="Africa" />
              <option value="America" />
              <option value="Asia" />
              <option value="Europe" />
              <option value="Oceania" />
            </datalist>
          </div>
        </div>
        {/* Cards */}
        <div className='countries-div'>
          {countries.length > 0 && countries.map((i, index) => {
            return (
              <Card key={index} data={i} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;