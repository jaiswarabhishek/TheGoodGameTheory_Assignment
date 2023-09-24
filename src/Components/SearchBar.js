import React from 'react'
import { useState,useEffect } from 'react';
import './SearchBar.css'
import axios from "axios";
import Card from './Card';


function SearchBar() {
  const [query, setQuery] = useState('');
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    // fetch beers by name
    if(query.length>0){
      axios.get(`https://api.punkapi.com/v2/beers?beer_name=${query}`)
      .then(res => {
        const beers = res.data;
        setBeers(beers);
      })
    }
    else{
      // fetch all beers
      axios.get(`https://api.punkapi.com/v2/beers`)
      .then(res => {
        const beers = res.data;
        setBeers(beers);
      })
    }
  }
  , [query]);  // useEffect will run only when query changes

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
     <div className="search-bar-container">
      <input
        type="search"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for beers by name ..."
        className="search-input"
      />
      <button  className="search-button">
        Search
      </button>
    </div>

  <div className="beer-list">
    {  
       beers.map(beer=>(
      <Card  // Here we are passing props to Card component 
        key={beer?.id} 
        name={beer?.name}
        tagline={beer?.tagline}
        description={beer?.description}
        image={beer?.image_url}
     />
       ))
    } 
  </div> 

   </div>
  )
}

export default SearchBar
