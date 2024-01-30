import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Speaker } from './projectTypes'


// Define the type for the context
interface SpeakerContextType {
  speakers: Speaker[];
  addSpeaker: (newSpeaker: Speaker) => void;
}

const SpeakerContext = createContext<SpeakerContextType | undefined>(undefined);

export const useSpeakerContext = () => {
    const context = useContext(SpeakerContext);
    if (!context) {
      throw new Error('useSpeakerContext must be used within a SpeakerProvider');
    }
    return context;
  };

interface SpeakerProviderProps {
  children: ReactNode;
}

export const SpeakerProvider: React.FC<SpeakerProviderProps> = ({ children }) => {
  const [speakers, setSpeakers] = useState<Speaker[]>([
    { id: 1, name: 'John Doe', topic: 'React Best Practices' },
    { id: 2, name: 'Jane Smith', topic: 'Building Scalable Apps' },
    { id: 3, name: 'Sam Johnson', topic: 'State Management in React' },
    { id: 4, name: 'Maciej Nieciecki', topic: 'Passing grade in components class' }
  ]);

  const addSpeaker = (newSpeaker: Speaker) => {
    const existingSpeakerIndex = speakers.findIndex((speaker) => speaker.id === newSpeaker.id);

    if (existingSpeakerIndex !== -1) {
      const updatedSpeakers = [...speakers];
      updatedSpeakers[existingSpeakerIndex] = newSpeaker;
      setSpeakers(updatedSpeakers);
    } else {
      setSpeakers([...speakers, newSpeaker]);
    }
  };

  const contextValue: SpeakerContextType = {
    speakers,
    addSpeaker,
  };

  return (
    <SpeakerContext.Provider value={contextValue}>
      {children}
    </SpeakerContext.Provider>
  );
};