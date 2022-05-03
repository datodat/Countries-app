import React from 'react';

const Card = ({ data }) => {
  return (
    <div className='card'>
      <div className='card-top'>
        <img src={data.flags.png} alt='logo' />
      </div>
      <div className='card-bottom'>
        {data.name}
      </div>
    </div>
  );
}

export default Card;