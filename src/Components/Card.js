import React from 'react'
import './Card.css';
import { RWebShare } from "react-web-share";

function Card({ name, tagline, image }) {
    
  return (
    <div className="beer-card">
      <img src={image} alt={name} className="beer-image" />
      <div className="beer-details">
        <h2>{name}</h2>
        <p className="tagline">{tagline}</p>
      </div>
      <RWebShare
        data={{
          text: `Checkout this beer ${name} - ${tagline}`,
          url: window.location.href
        }}
      >
        <button className="share-button">Share</button>
      </RWebShare>
    </div>
  )
}

export default Card
