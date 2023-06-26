import React, { useState, useEffect } from "react";
import { CardSearch } from "../../components";
import './styles.css';

function Search() {
  const [countries, setСountries] = useState([]);
  const [result, setResult] = useState([]);
  const url = 'https://restcountries.com/v3.1/all?fields=name,flags,maps,continents';

  useEffect(()=>{
    fetch(url)
      .then(res => {
        if(res.ok){
          return res.json();
        }
      })
      .then(data => {
        let countriesData = [];
        data.forEach(elem => {
          let obj = {};
          obj.country = elem.name.official;
          obj.continents = elem.continents[0];
          obj.flag = elem.flags.svg;
          obj.map = elem.maps.googleMaps;
          countriesData.push(obj);
        });
        setСountries(countriesData);
      })
      .catch((err) => {
        console.error(err);
      });
  },[])

  const onSearchCountries = (e) => {
    let valueInput = e.target.value;
    const resultNew = countries.filter((country => (country.country.includes(valueInput)) || (country.continents.includes(valueInput))));
    setResult(resultNew)
  }

  const renderSearch = () => {
    if(!countries.length){
      return (
        <p className=''>
          Загрузка...
        </p>
      )
    }

    if(!result.length){
      setResult(countries);
    }

    const searchList = result.map((result, index) => (
      <CardSearch
        key = {`country-${index}`}
        id = {`country-${index}`}
        card={result}
      />
    ))

    return (
      <ul className="search__list">
        {searchList}
      </ul>
      
    )
  }

  return(
    <div className="search__container">
      <h2 className="search__title">Search</h2>

      <div>
        <input
          className="search__input"
          type="text"
          placeholder="Найти"
          onChange={(e) => onSearchCountries(e)}
        />
        {renderSearch()}
      </div>
    </div>
  )
}

export default Search;
