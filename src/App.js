import React, {useCallback, useEffect, useState} from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from "./components/search-box/search-box.component";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users))
      .catch(err => console.log(err));
  }, []);

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const filterMonsters = useCallback(() => {
    return monsters.filter((monster) =>  monster.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }, [search]);

  return (
    <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox type="search" placeholder="search monsters" onChange={handleOnChange} value={search}/>
      <CardList monsters={search ? filterMonsters() : monsters}>
      </CardList>
    </div>
  );
}

export default App;
