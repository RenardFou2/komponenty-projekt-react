// ConferenceContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Conference } from './projectTypes';

interface ConferenceContextType {
  conferences: Conference[];
  addConference: (newConference: Conference) => void;
}

const ConferenceContext = createContext<ConferenceContextType | undefined>(undefined);

export const useConferenceContext = () => {
  const context = useContext(ConferenceContext);
  if (!context) {
    throw new Error('useConferenceContext must be used within a ConferenceProvider');
  }
  return context;
};

interface ConferenceProviderProps {
  children: ReactNode;
}

export const ConferenceProvider: React.FC<ConferenceProviderProps> = ({ children }) => {
  const [conferences, setConferences] = useState<Conference[]>([]);

  const addConference = (newConference: Conference) => {
    const existingConferenceIndex = conferences.findIndex((conference) => conference.id === newConference.id);
    
    if (existingConferenceIndex !== -1) {
      const updatedConferences = [...conferences];
      updatedConferences[existingConferenceIndex] = newConference;
      setConferences(updatedConferences);
    } else {
      setConferences([...conferences, newConference]);
    }
  };

  const contextValue: ConferenceContextType = {
    conferences,
    addConference,
  };

  return (
    <ConferenceContext.Provider value={contextValue}>
      {children}
    </ConferenceContext.Provider>
  );
};