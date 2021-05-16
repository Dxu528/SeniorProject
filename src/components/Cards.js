import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>
        Check out these AMAZING Games!
      </h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='./images/zelda.jpg'
                text='Explore the open world of hyrule for a thrilling adventure'
                label='Adventure'
                path='/services'
              />
              <CardItem
                src='./images/two.jpg'
                text='Explore and solve puzzles in this game for two'
                label='Co-op'
                path='/services'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='./images/lol.jpg'
                text='Play to defeat the enemy nexus with over 155 characters'
                label='MOBA'
                path='/services'
              />
              <CardItem
                src='./images/mario.jpg'
                text='Save the princess with mario in this 2D platformer'
                label='Platformer'
                path='/products'
              />
              <CardItem
                src='./images/valorant.png'
                text='Shoot your enemies while using special abilites to help win you the fight'
                label='Shooter'
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Cards;