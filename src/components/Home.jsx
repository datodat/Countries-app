// Card
import Card from './Card';

const Home = ({ 
  handleSearch, 
  searchWord, 
  setSearchWord,  
  handleInfo, 
  countries, 
  backColor 
}) => {

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
            style={{ backgroundColor: backColor }}
          />
        </form>
      </div>
      {/* Cards */}
      <div className='countries-div'>
        {countries.length > 0 && countries.map((i, index) => {
          return (
            <Card key={index} data={i} handleInfo={handleInfo} backColor={backColor} />
          )
        })}
      </div>
    </div>
  );
}

export default Home;