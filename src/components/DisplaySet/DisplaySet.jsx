const DisplaySet = ({ count }) => {
  return (
    <div className="set-wrapper">
      <div className="inner-wrapper">
        <div
          className={
            count > 1
              ? "work-bar done"
              : count === 1
              ? "work-bar active"
              : "work-bar"
          }
        >
          focus
        </div>
        <div
          className={
            count > 2
              ? "break-bar done"
              : count === 2
              ? "break-bar active"
              : "break-bar"
          }
        >
          break
        </div>
        <div
          className={
            count > 3
              ? "work-bar done"
              : count === 3
              ? "work-bar active"
              : "work-bar"
          }
        >
          focus
        </div>
        <div
          className={
            count > 4
              ? "break-bar done"
              : count === 4
              ? "break-bar active"
              : "break-bar"
          }
        >
          break
        </div>
      </div>
      <div className="inner-wrapper">
        <div
          className={
            count > 5
              ? "work-bar done"
              : count === 5
              ? "work-bar active"
              : "work-bar"
          }
        >
          focus
        </div>
        <div
          className={
            count > 6
              ? "break-bar done"
              : count === 6
              ? "break-bar active"
              : "break-bar"
          }
        >
          break
        </div>
        <div
          className={
            count > 7
              ? "work-bar done"
              : count === 7
              ? "work-bar active"
              : "work-bar"
          }
        >
          focus
        </div>
        <div
          className={
            count > 8
              ? "break-bar done"
              : count === 8
              ? "break-bar active"
              : "break-bar"
          }
        >
          break
        </div>
      </div>
    </div>
  );
};

export default DisplaySet;
