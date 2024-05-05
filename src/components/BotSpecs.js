import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BotSpecs.css";
import botData from "../db.json";

function BotSpecs({ onEnlist, onBack }) {
  const { id } = useParams();
  const [bot, setBot] = useState(null);

  useEffect(() => {
    const foundBot = botData.bots.find((b) => b.id === parseInt(id));
    setBot(foundBot || null);
  }, [id]);

  if (!bot) {
    return (
      <div>
        <p>Bot with ID {id} not found.</p>
      </div>
    );
  }
  return (
    <div id="BotSpecs-container">
      <img src={bot.avatar_url} alt="Bot Avatar" />
      <h1>{bot.name}</h1>
      <p>Catchphrase: {bot.catchphrase}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Bot Class: {bot.bot_class}</p>
      <p>Created At: {bot.created_at}</p>
      <p>Updated At: {bot.updated_at}</p>
      <button id="">Enlist Bot</button>
      <button id="listbtn">Back to List View</button>
    </div>
  );
}

export default BotSpecs;
