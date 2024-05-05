import YourBotArmy from "./YourBotArmy.js";
import Bot from "../db.json";

function BotCollection({ bots, onEnlist }) {
  return (
    <div>
      <h2>All Bots</h2>
      {bots.map((bot) => (
        <div key={bot.id}>
          <Bot bot={bot} />
          <button onClick={() => onEnlist(bot)}>Enlist</button>
        </div>
      ))}
      <YourBotArmy />
    </div>
  );
}

export default BotCollection;