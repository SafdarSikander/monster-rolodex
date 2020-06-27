import React from 'react';
import './search-box.styles.css';

const SearchBox = ({placeholder, onChange, value})=>{
  return(
    <input className="search" type="search" placeholder={placeholder} onChange={onChange} value={value}/>
  )
}

export default SearchBox;
