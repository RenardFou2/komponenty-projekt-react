import React from 'react';

const SpeakerListComponent = ({ speakers }) => {
  return (
    <ul>
      {speakers.map((speaker) => (
        <li key={speaker.id}>
          <strong>{speaker.name}</strong> - {speaker.topic}
        </li>
      ))}
    </ul>
  );
};

export default SpeakerListComponent;