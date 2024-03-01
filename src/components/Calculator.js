import { useState, useContext } from "react";
import "./Calculator.css";
import axios from "axios";
import CalculatorForm from "../forms/CalculatorForm";
import Notification from "./Notification";
import { StateContext } from "../context";

const Calculator = () => {
  const { origin, setOrigin } = useContext(StateContext);
  const { destination, setDestination } = useContext(StateContext);
  const { selectedUnit, setSelectedUnit } = useContext(StateContext);
  const [loading, setLoading] = useState(false);
  const { distance, setDistance } = useContext(StateContext);
  const distanceMi = (distance * 0.621371).toFixed(2);
  const [isOpen, setIsOpen] = useState(false);

  const handleCancel = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/search", {
        sourceAddress: origin,
        destinationAddress: destination,
      });
      if (data && data.distance) {
        setDistance(data.distance);
      }
      if (data.error) {
        setIsOpen(true);
      }
      setLoading(false);
    } catch (err) {
      setIsOpen(true);
      setLoading(false);
    }
  };

  return (
    <>
      <CalculatorForm
        origin={origin}
        destination={destination}
        setOrigin={setOrigin}
        setDestination={setDestination}
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
        loading={loading}
        distance={distance}
        distanceMi={distanceMi}
        handleSubmit={handleSubmit}
      />
      {isOpen && <Notification handleCancel={handleCancel} />}
    </>
  );
};

export default Calculator;
