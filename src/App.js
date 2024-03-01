import "./App.css";
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HistoricalQueries from "./components/HistoricalQueries";
import axios from "axios";

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_REST_ENDPOINT;

  axios.interceptors.response.use(
    function (response) {
      // Do something before request is sent
      return response;
    },
    function (error) {
      // Do something with request error
      let res = error.response;
      if (res.status === 401 && res.config && !res.config._isRetryRequest) {
      }
      return Promise.reject(error);
    }
  );
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
