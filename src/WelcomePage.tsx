import React from 'react';
import { useSpeakerContext } from './contextAndTypes/SpeakerContext.tsx';
import { useConferenceContext } from './contextAndTypes/ConferenceContext.tsx';
import LinkButton from './prezentacyjne/LinkButton.js';

const WelcomePage: React.FC = () => {
  const { speakers } = useSpeakerContext();
  const { conferences } = useConferenceContext();
  
  document.title = `Strona powitalna`

  return (
    <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
        <h2>Welcome Page</h2>
        {speakers.length} : Number of speakers
        <br />
        {conferences.length} : Number of conferences
        <br />
        <LinkButton label="Manage speakers" adres="/speakers" />
        <LinkButton label="Manage conferences" adres="/conferences" />
    </div>
  );
};
export default WelcomePage;