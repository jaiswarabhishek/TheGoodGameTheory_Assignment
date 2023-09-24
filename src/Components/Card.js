import React from 'react'
import './Card.css';

function Card({ name, tagline, image }) {
    
  return (
    <div className="beer-card">
      <img src={image} alt={name} className="beer-image" />
      <div className="beer-details">
        <h2>{name}</h2>
        <p className="tagline">{tagline}</p>
      </div>
    </div>
  )
}

export default Card
