import React from "react";
import map from 'lodash/map';
import './card-list.styles.css'

import Card from "../card/card.component";

const CardList = ({monsters}) => (<div className='card-list'>
  {map(monsters, (monster) => (
    <Card key={monster.id} monster={monster}/>
  ))}
</div>)

export default CardList;
