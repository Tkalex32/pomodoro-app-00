import { useContext, useEffect, useRef, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { FaPlayCircle, FaPauseCircle, FaInfoCircle } from "react-icons/fa";
import "react-circular-progressbar/dist/styles.css";
import { SettingsContext } from "../../context/SettingsContext";
import Info from "../Info/Info";

const Home = () => {
  const { workMin, shortMin, longMin } = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  useEffect(() => {
    const switchMode = () => {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds = (nextMode === "work" ? workMin : shortMin) * 60;
      setMode(nextMode);
      modeRef.current = nextMode;
      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    };

    secondsLeftRef.current = workMin * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, [workMin, shortMin, longMin]);

  const totalSeconds = mode === "work" ? workMin * 60 : shortMin * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <main>
      {showModal ? <Info handleModal={handleModal} /> : null}
      <div className="title-wrapper">
        <div className="title">Pomodoro Timer</div>
        <div className="info">
          <FaInfoCircle onClick={() => handleModal()} />
        </div>
      </div>
      <div className="progress-bar">
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
      </div>
      <div className="buttons">
        {isPaused ? (
          <FaPlayCircle
            className="button"
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <FaPauseCircle
            className="button"
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
      </div>
    </main>
  );
};

export default Home;
