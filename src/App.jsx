import { useState } from 'react'
import './App.css'
import Drum  from './drum';
import audio from './components/audioClips.jsx'


    

function App() {
  const [currentSound, setCurrentSound] = useState("");

  return (
    <>
      <h1>FCC Drum Machine</h1>
      <div className="container" id="drum-machine">
        <div id="display">{currentSound}</div>

        <div className="whole-drum">
          {audio.map((clip) => (
            <Drum
              className="drum-pad"
              key={clip.keyTrigger}
              keyTrigger={clip.keyTrigger}
              description={clip.description}
              url={clip.url}
              setCurrentSound={setCurrentSound}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
