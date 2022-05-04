import React from 'react';

const Header = ({ darkMode, setDarkMode, handleAll, colors }) => {
  return (
    <header className='header' style={{ backgroundColor: darkMode ? colors[2] : colors[0] }}>
      <h1 onClick={handleAll}>Where in the world?</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        <i className="fa-solid fa-moon icon-dark"></i>
        <i className="fa-solid fa-brightness icon-light"></i>
        Dark Mode
      </button>
    </header>
  );
}

export default Header;