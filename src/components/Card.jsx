const Card = ({ data, handleInfo, backColor }) => {
  return (
    <div 
      className='card' 
      onClick={() => handleInfo(data)} 
      style={{ backgroundColor: backColor }}
    >
      <div className='card-top'>
        <img src={data.flags.png} alt='logo' />
      </div>
      <div className='card-bottom'>
        <h4>{data.name}</h4>
        <p className='card-population'>Population: {data.population}</p>
        <p className='card-region'>Region: {data.region}</p>
        <p className='card-capital'>Capital: {data.capital}</p>
      </div>
    </div>
  );
}

export default Card;