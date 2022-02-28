import ReactSlider from "react-slider";

const Settings = () => {
  return (
    <main>
      <div className="title">Settings</div>
      <div className="slider-wrapper">
        <label htmlFor="">Work:</label>
        <ReactSlider
          className="slider"
          thumbClassName="thumb"
          trackClassName="track"
          value={25}
          max={45}
          min={1}
        />

        <label htmlFor="">Short break:</label>
        <ReactSlider
          className="slider short"
          thumbClassName="thumb short"
          trackClassName="track"
          value={5}
          max={20}
          min={1}
        />

        <label htmlFor="">Long break:</label>
        <ReactSlider
          className="slider long"
          thumbClassName="thumb long"
          trackClassName="track"
          value={20}
          max={30}
          min={1}
        />
      </div>
      <button className="save-button">Save</button>
    </main>
  );
};

export default Settings;
