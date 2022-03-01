import { useContext, useEffect, useRef, useState } from "react";
import { FaPlayCircle, FaPauseCircle, FaInfoCircle } from "react-icons/fa";
import { RiRestartFill } from "react-icons/ri";
import { SettingsContext } from "../../context/SettingsContext";
import Info from "../Info/Info";
import DisplaySet from "../DisplaySet/DisplaySet";
import ProgressCircle from "../ProgressCircle/ProgressCircle";
import "react-circular-progressbar/dist/styles.css";

const Home = () => {
  const { workMin, shortMin, longMin } = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);
  const countRef = useRef(count);

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  useEffect(() => {
    const switchMode = () => {
      const nextMode =
        (modeRef.current === "work") & (countRef.current < 7)
          ? "break"
          : modeRef.current === "work"
          ? "long"
          : "work";
      const nextSeconds =
        (nextMode === "work"
          ? workMin
          : nextMode === "break"
          ? shortMin
          : longMin) * 60;
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
      if (countRef.current === 9) {
        setMode("end");
        modeRef.current = "end";
        setIsPaused(true);
        isPausedRef.current = true;
        return;
      }
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, [workMin, shortMin, longMin]);

  useEffect(() => {
    countRef.current++;
    setCount(countRef.current);
  }, [mode]);

  const handleReset = () => {
    setMode("work");
    modeRef.current = "work";
    setSecondsLeft(workMin * 60);
    secondsLeftRef.current = workMin * 60;
    setCount(0);
    countRef.current = 0;
  };

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
      <DisplaySet count={count} />
      <ProgressCircle
        percentage={percentage}
        minutes={minutes}
        seconds={seconds}
        mode={mode}
      />
      <div className="buttons">
        {isPaused & (mode !== "end") ? (
          <FaPlayCircle
            className="button"
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (mode === "end") & isPaused ? (
          <RiRestartFill className="button reset" onClick={handleReset} />
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
