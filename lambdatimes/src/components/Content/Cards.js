import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">

      {props.cards.map(card => (
        <div>
          <Card card={card} />

        </div>
      ))}


    </div>
  )
}


export default Cards;