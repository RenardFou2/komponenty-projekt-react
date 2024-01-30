import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SpeakerListComponent from './SpeakerListComponent';
import CustomizeSpeakerComponent from './CustomizeSpeakerComponent';
import ConferenceListComponent from './ConferenceListComponent.js';
import CreateConferenceComponent from './CreateConferenceComponent.tsx';
import { SpeakerProvider } from './contextAndTypes/SpeakerContext.tsx';
import  WelcomePage from './WelcomePage.tsx';
import { ConferenceProvider } from './contextAndTypes/ConferenceContext.tsx';

function App() {

  return (
    <Router>
      <SpeakerProvider>
        <ConferenceProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/speakers" element={<SpeakerListComponent />} />
              <Route path="/speakers/customize/:id" element={<CustomizeSpeakerComponent />} />
              <Route path="/conferences" element={<ConferenceListComponent />} />
              <Route path="/create-conference" element={<CreateConferenceComponent />} />
            </Routes>
          </div>
        </ConferenceProvider>
      </SpeakerProvider>
    </Router>
  );
}

export default App;
