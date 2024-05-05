import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BotList from "./components/BotList";
import BotSpecs from "./components/BotSpecs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BotList />} />
          <Route path="/bots/:id" element={<BotSpecs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
