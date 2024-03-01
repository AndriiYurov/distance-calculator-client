import "./App.css";
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HistoricalQueries from "./components/HistoricalQueries";
import axios from "axios";

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_REST_ENDPOINT;

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/history" element={<HistoricalQueries />} />
      </Routes>
    </div>
  );
}

export default App;
