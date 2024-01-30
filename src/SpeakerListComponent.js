import React from 'react';
import { Link } from 'react-router-dom';
import { useSpeakerContext } from './contextAndTypes/SpeakerContext.tsx';

const SpeakerListComponent = () => {
  const { speakers } = useSpeakerContext();

  return (
    <ul>
      {speakers.map((speaker) => (
        <li key={speaker.id}>
          <Link to={`/customize/${speaker.id}`}>{speaker.name}</Link> - {speaker.topic}
        </li>
      ))}
    </ul>
  );
};

export default SpeakerListComponent;