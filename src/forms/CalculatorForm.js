import calculatorWhiteIcon from "../icons/calculator_white_icon.png";
import calculatorGrayIcon from "../icons/calculator_grey_icon.png";
import { useContext } from "react";
import { StateContext } from "../context";

const CalculatorForm = ({ loading, distanceMi, handleSubmit }) => {
  const { origin, setOrigin } = useContext(StateContext);
  const { destination, setDestination } = useContext(StateContext);
  const { selectedUnit, setSelectedUnit } = useContext(StateContext);
  const { distance } = useContext(StateContext);

  return (
    <form className="grid-container" onSubmit={handleSubmit}>
      <div className="col item1">
        <label htmlFor="origin" className="label-input-text">
          Source Adress
        </label>
        <input
          className="input-text"
          id="origin"
          type="text"
          placeholder="Input address"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </div>
      <div className="col item2">
        <label htmlFor="destination" className="label-input-text">
          Destination Address
        </label>
        <input
          className="input-text"
          id="destination"
          type="text"
          placeholder="Input address"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="col item3">
        <p className="label-input-text">Unit</p>

        <div>
          <input
            type="radio"
            id="miles"
            className="input-radio"
            name="radio"
            value="miles"
            checked={selectedUnit === "miles"}
            onChange={(e) => setSelectedUnit(e.target.value)}
          />
          <label htmlFor="miles" className="label-radio-text">
            Miles
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="kilometers"
            className="input-radio"
            name="radio"
            value="kilometers"
            checked={selectedUnit === "kilometers"}
            onChange={(e) => setSelectedUnit(e.target.value)}
          />
          <label htmlFor="kilometers" className="label-radio-text">
            Kilometers
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="both"
            className="input-radio"
            name="radio"
            value="both"
            checked={selectedUnit === "both"}
            onChange={(e) => setSelectedUnit(e.target.value)}
          />
          <label htmlFor="both" className="label-radio-text">
            Both
          </label>
        </div>
      </div>
      <div className="col item4">
        <p className="label-input-text">Distance</p>
        <div>
          {selectedUnit === "both" ? (
            <span className="distance-text">
              {distance && distanceMi + " mi"}
              <span style={{ paddingLeft: "15px" }}></span>
              {distance && distance + " km"}
            </span>
          ) : selectedUnit === "kilometers" ? (
            <span className="distance-text">
              {distance && distance + " km"}
            </span>
          ) : (
            <span className="distance-text">
              {distance && distanceMi + " mi"}
            </span>
          )}
        </div>
      </div>

      <div className="col item5">
        <button
          className={`${
            origin && destination ? "btn-calc btn-calc-active" : "btn-calc"
          }`}
          disabled={!origin || !destination}
        >
          <span>{loading ? "Loading..." : "Calculate Distance"}</span>
          <img
            src={
              origin && destination ? calculatorWhiteIcon : calculatorGrayIcon
            }
            width={14}
            alt="icon"
          />
        </button>
      </div>
    </form>
  );
};

export default CalculatorForm;
