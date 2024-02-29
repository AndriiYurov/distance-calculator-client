import calculatorWhiteIcon from "../icons/calculator_white_icon.png";
import calculatorGrayIcon from "../icons/calculator_grey_icon.png";

const CalculatorForm = ({
  destination,
  origin,
  loading,
  distanceMi,
  distance,
  selectedUnit,
  setSelectedUnit,
  setOrigin,
  setDestination,
  handleSubmit,
}) => {
  return (
    <form className="grid-container" onSubmit={handleSubmit}>
      <div className="col item1">
        <label htmlFor="origin" className="label-input-text">Source Adress</label>
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
        <label htmlFor="destination" className="label-input-text">Destination Address Adress</label>
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
        <label className="label-input-text">Unit</label>

        <div>
          <input
            type="radio"
            className="input-radio"
            name="radio"
            value="miles"
            checked={selectedUnit === "miles"}
            onChange={(e) => setSelectedUnit(e.target.value)}
          />
          <label className="label-radio-text">Miles</label>
        </div>
        <div>
          <input
            type="radio"
            className="input-radio"
            name="radio"
            value="kilometers"
            checked={selectedUnit === "kilometers"}
            onChange={(e) => setSelectedUnit(e.target.value)}
          />
          <label className="label-radio-text">Kilometers</label>
        </div>
        <div>
          <input
            type="radio"
            className="input-radio"
            name="radio"
            value="both"
            checked={selectedUnit === "both"}
            onChange={(e) => setSelectedUnit(e.target.value)}
          />
          <label className="label-radio-text">Both</label>
        </div>
      </div>
      <div className="col item4">
        <label className="label-input-text">Distance</label>
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
