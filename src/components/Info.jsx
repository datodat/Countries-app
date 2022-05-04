import React from 'react';

const Info = ({ data, handleBack }) => {
  return (
    <div className='info-div'>
      <button className='back-btn' onClick={handleBack}><i className="fa-solid fa-arrow-left-long"></i> Back</button>
      <div>
        <div className='info-left-div'>
          <img src={data.flags.png} alt='logo' />
        </div>
        <div className='info-right-div'>
          <h3>{data.name}</h3>
          <div>
            <div className='div-left-info'>
              <p>Native Name: <span>{data.nativeName}</span></p>
              <p>Population: <span>{data.population}</span></p>
              <p>Region: <span>{data.region}</span></p>
              <p>Sub Region: <span>{data.subregion}</span></p>
              <p>Capital: <span>{data.capital}</span></p>
            </div>
            <div className='div-right-info'>
              <p>Top Level Domain: <span>{data.topLevelDomain.map((i, index) => i)}</span></p>
              <p>Currencies: <span>{data.currencies.map((i, index) => i.code)}</span></p>
              <p>Languages: <span>{data.languages.map((i, index) => i.name)}</span></p>
            </div>
          </div>
          <p>Border Countries: </p>
        </div>
      </div>
    </div>
  );
}

export default Info;