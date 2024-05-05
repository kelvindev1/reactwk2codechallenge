import React, { useEffect, useState } from "react";
import "./BotList.css";
import { Link } from "react-router-dom";

function BotList() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="botlist-container">
      <ul className="botlist-items">
        {bots.map((bot) => (
          <li key={bot.id} className="botlist-item">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{bot.name}</h5>
                <Link to={`/bots/${bot.id}`} state={{ bot }}>
                  <img src={bot.avatar_url} alt="Bot Avatar" />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotList;
