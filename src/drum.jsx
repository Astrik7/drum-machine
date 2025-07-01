
import { useEffect, useState } from "react";

export default function Drum(props) {
  const [isActive, setIsActive] = useState(false);
  

  const playSound = () => {
    const audio = document.getElementById(props.keyTrigger);
    audio.currentTime = 0;
    audio.play();
    props.setCurrentSound(props.description);
    setIsActive(true);
    setTimeout(() => setIsActive(false), 100); 
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toUpperCase() === props.keyTrigger) {
        playSound();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [props.keyTrigger, props.url, props.description]);

  return (
    <button
      className={`drum-pad ${isActive ? "active" : ""}`}
      id={`drum-${props.keyTrigger}`}
      onClick={playSound}
    >
      {props.keyTrigger}
      <audio className="clip" id={props.keyTrigger} src={props.url} />
    </button>
  );
}
