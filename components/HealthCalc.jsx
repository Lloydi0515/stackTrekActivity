import HealthVideo from "../HealthVideo.json";
import "./HealthCalc.css";

const HealthCalc = () => {
  return (
    <div className="grid">
      {HealthVideo.map((health) => {
        return (
          <div className="grid-1">
            <iframe
              width="400"
              height="315"
              src={health}
              frameborder="0"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};

export default HealthCalc;
