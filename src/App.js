import React, { useState, useEffect } from 'react';
// Css
import './App.css';
// Axios
import axios from 'axios';
// Components
import Header from './components/Header';
import Home from './components/Home';
import Info from './components/Info';

const colors = [
  '#eeeeee', // Background light
  '#ffffff', // Header light
  '#3b3f52', // Header dark
  '#272a39'  // Background dark
];

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [clickedCountry, setClickedCountry] = useState(null);

  const [countries, setCountries] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    handleAll();
  }, [])

  // Scroll down listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 400){
        setShowBtn(true);
      }else{
        setShowBtn(false);
      }
    })
  }, [])

  // All countries 
  const handleAll = () => {
    setShowInfo(false);
    axios.get('https://restcountries.com/v2/all')
      .then(res => {
        setSearchWord('');
        setCountries(res.data);
      })
      .catch(error => console.log(error.message))
  }

  // Search handler
  const handleSearch = () => {
    if(searchWord){
      axios.get(`https://restcountries.com/v2/name/${searchWord}`)
        .then(res => {
          setCountries(res.data);
          setSearchWord('');
        })
        .catch(error => console.log(error.message)) 
    }else{
      handleAll();
    }
  }

  // Go to detailed information
  const handleInfo = (data) => {
    if(data){
      setClickedCountry(data);
      setShowInfo(true);
    }
  }

  // Back button in one country information
  const handleBack = () => {
    setShowInfo(false);
    handleAll();
  }

  // Back to top after scroll down handler
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className='container' style={{ backgroundColor: darkMode ? colors[3] : colors[0], color: darkMode ? 'white' : 'black' }}>
      {/* Button to back top after scroll down */}
      <button 
        style={{ 
          display: showBtn ? 'inline-block' : 'none',
          backgroundColor: darkMode ? '#161a2e' : '#b5b5b5'
        }} 
        className='go-top' 
        onClick={() => goToTop()}
      >
        <i className="fa-solid fa-arrow-up-long"></i>
      </button>
      {/* Header */}
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        handleAll={handleAll}
        colors={colors}
      />
      {showInfo ?
        // One Country info
        <Info 
          data={clickedCountry}
          handleBack={handleBack}
          countries={countries}
          backColor={darkMode ? colors[2] : colors[1]}
        /> 
          :
        // All Countries
        <Home 
          handleSearch={handleSearch}
          searchWord={searchWord}
          setSearchWord={setSearchWord}
          handleInfo={handleInfo}
          countries={countries}
          backColor={darkMode ? colors[2] : colors[1]}
        />
      }
    </div>
  );
}

export default App;