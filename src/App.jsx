import { useState } from 'react'
import './App.css'
import Drum  from './drum';
import audioclips from './components/audioClips.jsx'


    

function App() {
  const [currentSound, setCurrentSound] = useState("");

  return (
    <div className="container" id="drum-machine">
      <h1>FCC Drum Machine</h1>
      <div className="whole-drum">
        
        {audioclips.map((clip) => (
          <Drum className="drum-pad"
            key={clip.keyTrigger}
            keyTrigger={clip.keyTrigger}
            description={clip.description}
            url={clip.url}
            setCurrentSound={setCurrentSound}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
