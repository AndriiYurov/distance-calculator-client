import { useState, createContext } from "react";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("miles");
  const [distance, setDistance] = useState("");

  return (
    <StateContext.Provider
      value={{
        origin,
        setOrigin,
        destination,
        setDestination,
        selectedUnit,
        setSelectedUnit,
        distance,
        setDistance,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
