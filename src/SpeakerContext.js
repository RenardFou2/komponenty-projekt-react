import { createContext, useContext, useState } from 'react';

const SpeakerContext = createContext();

export const useSpeakerContext = () => {
  return useContext(SpeakerContext);
};

export const SpeakerProvider = ({ children }) => {
  const [speakers, setSpeakers] = useState([
    { id: 1, name: 'John Doe', topic: 'React Best Practices' },
    { id: 2, name: 'Jane Smith', topic: 'Building Scalable Apps' },
    { id: 3, name: 'Sam Johnson', topic: 'State Management in React' }
  ]);

  const addSpeaker = (newSpeaker) => {
    setSpeakers([...speakers, newSpeaker]);
  };

  return (
    <SpeakerContext.Provider value={{ speakers, addSpeaker }}>
      {children}
    </SpeakerContext.Provider>
  );
};