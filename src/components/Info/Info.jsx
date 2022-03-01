import { AiFillCloseCircle } from "react-icons/ai";

const Info = ({ handleModal }) => {
  return (
    <div className="modal-wrapper" onClick={() => handleModal()}>
      <div className="modal-content">
        <div className="close-btn">
          <AiFillCloseCircle onClick={() => handleModal()} />
        </div>
        <div className="modal-title">What Is the Pomodoro Technique?</div>
        <div className="modal-text">
          <p>
            The Pomodoro Technique is a time management system that encourages
            people to work with the time they have-rather than against it. Using
            this method, you break your workday into 25-minute chunks separated
            by five-minute breaks. These intervals are referred to as pomodoros.
            After about four pomodoros, you take a longer break of about 15 to
            20 minutes.
          </p>
          <p>
            Additionally, the forced breaks help to cure that frazzled,
            burnt-out feeling most of us experience toward the end of the day.
            It's impossible to spend hours in front of your computer without
            even realizing it, as that ticking timer reminds you to get up and
            take a breather.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
