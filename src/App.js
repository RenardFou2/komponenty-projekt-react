import './App.css';
import { useSpeakerContext } from './SpeakerContext';
import SpeakerListComponent from './SpeakerListComponent';
import AddSpeakerComponent from './AddSpeakerComponent';

function App() {
  
  const {speakers} = useSpeakerContext();

  return (
    <div className="App">
      <h1>Conference Speakers</h1>
      <SpeakerListComponent speakers={speakers} />
      <AddSpeakerComponent />
    </div>
  );
}

export default App;
