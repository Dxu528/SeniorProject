import React, { useState} from 'react';
import SearchBar from './SearchBar';
import Fuse from "fuse.js";
import games from './Games.json'
import GameCard from './GameCard';
import '../App.css';

const Games = (props) => {

  const [data, setData] = useState(games);

  const searchData = (pattern) => {
    if (!pattern) {
      setData(games);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["name", "genre"],
    });

    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({item}) => {
        matches.push(item);
      });
      setData(matches);
    }
  };
	
  return (
    <div>
      <h1 className="games">Game Library</h1>
      <SearchBar
        placeholder="Search"
        onChange={(e) => searchData(e.target.value)}
       />

      <div className="Container">
        {data.map((item) => (
          <GameCard {...item} key={item.title} />
        ))}
      </div>
    </div>
  );
}

export default Games