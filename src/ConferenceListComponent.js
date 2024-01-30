import React from 'react';
import { Link } from 'react-router-dom';
import { useConferenceContext } from './contextAndTypes/ConferenceContext.tsx';

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
        <Link to="/create-conference">
            <button>
                Add conference
            </button>
        </Link>
    </div>
  );
};

export default ConferenceListComponent;