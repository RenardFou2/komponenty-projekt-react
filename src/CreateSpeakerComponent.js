import React from 'react';
import { useSpeakerContext } from './contextAndTypes/SpeakerContext';

const AddSpeakerComponent = () => {
  const { addSpeaker } = useSpeakerContext();

  document.title = `Tworzenie speakera`

  const handleAddSpeaker = () => {
    const newSpeaker = { id: 4, name: 'New Speaker', topic: 'New Topic' };
    addSpeaker(newSpeaker);
  };

  return (
    <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
      <button onClick={handleAddSpeaker}>Add Test Speaker</button>
    </div>
  );
};

export default AddSpeakerComponent;
