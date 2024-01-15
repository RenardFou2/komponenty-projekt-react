import React from 'react';
import { useSpeakerContext } from './SpeakerContext';

const AddSpeakerComponent = () => {
  const { addSpeaker } = useSpeakerContext();

  const handleAddSpeaker = () => {
    const newSpeaker = { id: 4, name: 'New Speaker', topic: 'New Topic' };
    addSpeaker(newSpeaker);
  };

  return (
    <div>
      <button onClick={handleAddSpeaker}>Add Test Speaker</button>
    </div>
  );
};

export default AddSpeakerComponent;