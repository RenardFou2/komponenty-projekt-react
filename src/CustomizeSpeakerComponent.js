import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSpeakerContext } from './contextAndTypes/SpeakerContext.tsx';

const CustomizeSpeakerComponent = () => {
    const { speakers, addSpeaker } = useSpeakerContext();
    const { id } = useParams();
    const navigate = useNavigate(); 
  
    document.title = `Edycja speakera`

    const speakerToCustomize = speakers.find((speaker) => speaker.id === parseInt(id, 10));
  
    const [customName, setCustomName] = useState(speakerToCustomize.name);
    const [customTopic, setCustomTopic] = useState(speakerToCustomize.topic);

    if (!speakerToCustomize) {
      return <div>Speaker not found</div>;
    }
  
    const handleSave = () => {
      const updatedSpeaker = {
        ...speakerToCustomize,
        name: customName,
        topic: customTopic,
      };
  
      addSpeaker(updatedSpeaker);
      navigate('/');
    };
  
    return (
      <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
        <h2>Customize Speaker</h2>
        <label>
          Name:
          <input type="text" value={customName} onChange={(e) => setCustomName(e.target.value)} />
        </label>
        <br />
        <label>
          Topic:
          <input type="text" value={customTopic} onChange={(e) => setCustomTopic(e.target.value)} />
        </label>
        <br />
        <button onClick={handleSave}>Save</button>
      </div>
    );
};

export default CustomizeSpeakerComponent;