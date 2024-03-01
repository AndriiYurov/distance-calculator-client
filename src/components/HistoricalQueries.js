import { useEffect, useState } from "react";
import "./HistoricalQueries.css";
import axios from "axios";
import HistoricalQueriesForm from "../forms/HistoricalQueriesForm";

const HistoricalQueries = () => {
  const [historicalQueries, setHistoricalQueries] = useState("");
  useEffect(() => {
    fetchHistoricalQueries();
  }, []);
  const fetchHistoricalQueries = async () => {
    const { data } = await axios.get("/history");
    setHistoricalQueries(data);
  };
  return (
    <div className="crawl">
      <div className="query-header">
        <p className="par-h">Historical Queries</p>
        <p className="par-p">History of the user's queries.</p>
      </div>
      <div className="table-header">
        <div className="table-header-row">
          <p className="p-h-text">Source Address</p>
        </div>
        <div className="table-header-row">
          <p className="p-h-text">Destination Address</p>
        </div>
        <div className="table-header-row">
          <p className="p-h-text">Distance in Miles</p>
        </div>
        <div className="table-header-row">
          <p className="p-h-text">Distance in Kilometers</p>
        </div>
      </div>
      {historicalQueries &&
        historicalQueries.map((queries) => {
          const { _id, distance, origin, destination } = queries;
          const distanceKm = distance.distanceKm;
          const distanceMi = (distanceKm * 0.621371).toFixed(2);
          return (
            <HistoricalQueriesForm
              key={_id}
              _id={_id}
              origin={origin}
              destination={destination}
              distanceKm={distanceKm}
              distanceMi={distanceMi}
            />
          );
        })}
    </div>
  );
};

export default HistoricalQueries;
