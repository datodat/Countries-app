const Header = ({ darkMode, setDarkMode, handleAll, colors }) => {
  return (
    <header id="header" className='header' style={{ backgroundColor: darkMode ? colors[2] : colors[1] }}>
      <h1 onClick={handleAll}>Where in the world?</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        <i 
          className="fa-solid fa-moon"
          style={{ display: darkMode ? 'none' : '' }}  
        ></i>
        <i 
          className="fa-solid fa-sun"
          style={{ display: darkMode ? '' : 'none' }}
        ></i>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}

export default Header;