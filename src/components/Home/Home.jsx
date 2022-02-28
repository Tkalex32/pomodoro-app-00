import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { FaPlayCircle, FaPauseCircle, FaStopCircle } from "react-icons/fa";
import "react-circular-progressbar/dist/styles.css";

const Home = () => {
  return (
    <main>
      <div className="title">Pomodoro Timer</div>
      <div className="progress-bar">
        <CircularProgressbar
          value={60}
          text={`05:20`}
          strokeWidth={4}
          styles={buildStyles({
            pathColor: "#f54e4e",
            trailColor: "#c5c5c51a",
          })}
        />
      </div>
      <div className="buttons">
        <FaPlayCircle className="button" />
        <div className="gap"></div>
        <FaPauseCircle className="button" />
      </div>
    </main>
  );
};

export default Home;
