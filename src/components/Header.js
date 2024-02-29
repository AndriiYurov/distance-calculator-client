import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useParams } from "react-router-dom";
import clockIcon from "../icons/clock_icon.png"
import calculatorBlackIcon from "../icons/calculator_black_icon.png"

const Header = () => {
  const [current, setCurrent] = useState("");
  const navigate = useNavigate();
  const checkRoute = useParams();
  useEffect(() => {
    setCurrent(window.location.pathname);
  }, [checkRoute]);

  return (
    <div className="container">
      <div className="header">
        <p className="par-header-h">Distance Calculator</p>
        <p className="par-header-p">
          Prototype web application for calculating the distance between
          addresses.
        </p>
      </div>
      <div>
        <button
          className={
            current === "/"
              ? "btn-header"
              : current === "/history"
              ? "btn-header-h"
              : "btn-header"
          }
          onClick={() =>
            (current === "/" && navigate("/history")) ||
            (current === "/history" && navigate("/"))
          }
        >
          <span>
            {current === "/" && "View Historical Queries"}
            {current === "/history" && "Back to Calculator"}
          </span>
          {current === "/" && <img src={clockIcon} width={14} alt="icon"/>}
          {current === "/history" && <img src={calculatorBlackIcon} width={14} alt="icon"/>}
        </button>
      </div>
    </div>
  );
};

export default Header;
