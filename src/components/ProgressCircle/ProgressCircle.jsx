import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

const ProgressCircle = ({ percentage, minutes, seconds, mode }) => {
  return (
    <div className="progress-bar">
      {mode !== "end" ? (
        <CircularProgressbar
          value={percentage}
          text={`${minutes}:${seconds}`}
          strokeWidth={4}
          counterClockwise
          styles={buildStyles({
            pathColor: mode === "work" ? "#f54e4e" : "#4aec8c",
            trailColor: "#c5c5c51a",
          })}
        />
      ) : (
        <CircularProgressbarWithChildren
          value={0}
          strokeWidth={4}
          styles={buildStyles({
            trailColor: "#c5c5c51a",
          })}
        >
          <div className="progress-text-title">Set is ready.</div>
          <div className="progress-text-info">
            If you want to start a new set, you can restart it with the same
            time intervals, or change them in the settings menu.
          </div>
          <div>See you!</div>
        </CircularProgressbarWithChildren>
      )}
    </div>
  );
};

export default ProgressCircle;
