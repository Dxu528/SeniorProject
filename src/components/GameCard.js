import React from 'react';
import './GameCard.css';

const GameCard = ({name, genre, image, path}) => {
    return (
      <div className="CardWrapper">
        <div className="ColImg">
          <img className="Img" src={image} alt={name} />
        </div>
        <div className="ColDetail">
          <div className="Header">
            <div className="name">{name}</div>
          </div>
          <div className="Description">{genre}</div>
          <a className="Link" href={path}>
            Learn more
          </a>
        </div>
      </div>
    );
};

export default GameCard