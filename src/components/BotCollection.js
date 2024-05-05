import React, { useEffect, useState } from "react";
import SortBar from "./SortBar";
import botData from "../db.json";
import Filter from "./Filter";

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    setBots(botData.bots);
  }, []);

  const handleSort = (sortBy) => {
    let sortedBots = [...bots];
    sortedBots.sort((a, b) => {
      return a[sortBy] - b[sortBy];
    });
    setBots(sortedBots);
  };
  return (
    <div>
      <SortBar onSort={handleSort} />
      <Filter />
      {bots.map((bot) => (
        <div key={bot.id}>
          <h2>{bot.name}</h2>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
