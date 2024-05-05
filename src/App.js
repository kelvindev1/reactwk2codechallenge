import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BotList from "./components/BotList";
import BotSpecs from "./components/BotSpecs";
import SortBar from "./components/SortBar";

function App() {
  return (
    <div className="App">
      <SortBar />
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
