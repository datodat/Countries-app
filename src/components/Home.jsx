import React from 'react';
// Card
import Card from './Card';

const Home = ({ handleSearch, searchWord, setSearchWord, setRegion, handleInfo, countries }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  }

  return (
    <div className='body-container'>
      <div className='search-div'>
        <form className='form' onSubmit={handleSubmit}>
          <i 
            className="fa-solid fa-magnifying-glass"
            onClick={handleSubmit}
          ></i>
          <input 
            type='text' 
            placeholder='Search for a country...'
            value={searchWord}
            onChange={({target}) => setSearchWord(target.value)}
          />
        </form>
        <div className='dropdown-div'>
          <input 
            list="browsers" 
            placeholder='Filter by Region:'
            onChange={({target}) => setRegion(target.value)}  
          />
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
            <Card key={index} data={i} handleInfo={handleInfo} />
          )
        })}
      </div>
    </div>
  );
}

export default Home;