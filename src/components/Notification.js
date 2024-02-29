import "./Notification.css";
import errorIcon from "../icons/error_icon.png";

const Notification = ({handleCancel}) => {
    
  return (
    <div className="container-f">
    <div className="container-notification">
      <div className="col-n">
        <img src={errorIcon} width={17} alt="error" />
      </div>
      <div className="col-n">
        <p className="par-title">Calculation failed</p>
        <p className="par-message">
          Something went wrong and the calculation failed
        </p>
      </div>
      <div className="col-n">X</div>
      <div className="notification-background" onClick={handleCancel}></div>
    </div>
    </div>
  );
};

export default Notification;
