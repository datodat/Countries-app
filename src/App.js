import React, { useState, useEffect } from 'react';
// Css
import './App.css';
// Axios
import axios from 'axios';
// Components
import Header from './components/Header';
import Home from './components/Home';
import Info from './components/Info';

const colors = ['#eeeeee', '#ffffff', '#3b3f52', '#272a39'];

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [clickedCountry, setClickedCountry] = useState(null);

  const [countries, setCountries] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [region, setRegion] = useState(null);

  useEffect(() => {
    handleAll();
  }, [])

  useEffect(() => {
    if(region){
      handleRegion();
    }else{
      handleAll();
    }
  }, [region]) //eslint-disable-line

  const handleAll = () => {
    setShowInfo(false);
    axios.get('https://restcountries.com/v2/all')
      .then(res => {
        setSearchWord('');
        setCountries(res.data);
      })
      .catch(error => console.log(error.message))
  }

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

  const handleRegion = () => {
    axios.get(`https://restcountries.com/v2/continent/${region}`)
      .then(res => setCountries(res.data))
      .catch(error => console.log(error.message))
  }

  const handleInfo = (data) => {
    if(data){
      setClickedCountry(data);
      setShowInfo(true);
    }
  }

  const handleBack = () => {
    setShowInfo(false);
    handleAll();
  }

  return (
    <div className='container' style={{ backgroundColor: darkMode ? colors[3] : colors[1], color: darkMode ? 'white' : 'black' }}>
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        handleAll={handleAll}
        colors={colors}
      />
      {showInfo ?
        <Info 
          data={clickedCountry}
          handleBack={handleBack}
        /> 
          :
        <Home 
          handleSearch={handleSearch}
          searchWord={searchWord}
          setSearchWord={setSearchWord}
          setRegion={setRegion}
          handleInfo={handleInfo}
          countries={countries}
        />
      }
    </div>
  );
}

export default App;