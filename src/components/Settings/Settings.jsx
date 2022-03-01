import { useContext } from "react";
import ReactSlider from "react-slider";
import { SettingsContext } from "../../context/SettingsContext";

const Settings = () => {
  const { workMin, shortMin, longMin, setWork, setShort, setLong, setDefault } =
    useContext(SettingsContext);

  return (
    <main>
      <div className="title">Settings</div>
      <div className="slider-wrapper">
        <label htmlFor="">Work: {workMin}:00 min</label>
        <ReactSlider
          className="slider"
          thumbClassName="thumb"
          trackClassName="track"
          value={workMin}
          onChange={(newValue) => setWork(newValue)}
          max={40}
          min={20}
        />

        <label htmlFor="">Short break: {shortMin}:00 min</label>
        <ReactSlider
          className="slider short"
          thumbClassName="thumb short"
          trackClassName="track"
          value={shortMin}
          onChange={(newValue) => setShort(newValue)}
          max={10}
          min={5}
        />

        <label htmlFor="">Long break: {longMin}:00 min</label>
        <ReactSlider
          className="slider long"
          thumbClassName="thumb long"
          trackClassName="track"
          value={longMin}
          onChange={(newValue) => setLong(newValue)}
          max={30}
          min={15}
        />
      </div>
      <button className="save-button" onClick={setDefault}>
        Reset
      </button>
    </main>
  );
};

export default Settings;
