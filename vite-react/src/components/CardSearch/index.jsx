import React from 'react'
import './styles.css'

function CardSearch({id, card}) {

  const { country, flag, continents, map } = card
  return (
    <li className='search__item'>
      <a className='search__card-link' href={map} target='_blank' alt={country}>
        <img className='search__card-img-flag' src={flag} alt={country}/>
      </a>
      <h3 className='search__country'>{country}</h3>
      <p>Сontinents: {continents}</p>
      
    </li>
  )
}

export default CardSearch;
