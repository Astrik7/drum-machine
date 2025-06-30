

export default function Drum(props) {
  const playSound = () => {
    const audio = new Audio(props.url);
    audio.play();
    
  };

  return (
    <button
      className="drum-pad"
      id={`drum-${props.keyTrigger}`}
      onClick={playSound}
    >
      {props.keyTrigger}
      <audio className="clip" id={props.keyTrigger} src={props.url} />
    </button>
  );
}
