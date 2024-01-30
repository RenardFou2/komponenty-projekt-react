import React from 'react';
import { useConferenceContext } from './contextAndTypes/ConferenceContext.tsx';
import LinkButton from './prezentacyjne/LinkButton.js';

const ConferenceListComponent = () => {
  const { conferences } = useConferenceContext();
  
  document.title = `Lista konferencji`

  return (
    <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
        <h2>Conference List</h2>
      {conferences.map((conference) => (
        <li key={conference.id}>
          <strong>{conference.name}</strong> - {conference.date.toLocaleDateString()}- {conference.email} - Speakers:
          <div>
            {conference.speakers.map((speaker) => (
              <li key={speaker.id}>
                {speaker.name} - {speaker.topic}
              </li>
            ))}
          </div>
          <br />
        </li>
        ))}
        <br />
        <LinkButton label="Add conference" adres="/create-conference" />
    </div>
  );
};

export default ConferenceListComponent;