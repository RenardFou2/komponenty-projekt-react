import React from 'react';
import { Link } from 'react-router-dom';
import { useSpeakerContext } from './contextAndTypes/SpeakerContext.tsx';

const SpeakerListComponent = () => {
  const { speakers } = useSpeakerContext();
  document.title = `Lista speakerów`

  return (
    <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
      <h2>List of Speakers</h2>
      {speakers.map((speaker) => (
        <li key={speaker.id}>
          <Link to={`/speakers/customize/${speaker.id}`}>{speaker.name}</Link> - {speaker.topic}
        </li>
      ))}
    </div>
  );
};

export default SpeakerListComponent;