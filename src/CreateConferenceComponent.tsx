import React, { useState } from 'react';
import { useSpeakerContext } from './contextAndTypes/SpeakerContext.tsx';
import { useConferenceContext } from './contextAndTypes/ConferenceContext.tsx';
import Alert from './prezentacyjne/AlertPoppup.js';

const CreateConferenceComponent: React.FC = () => {
  const { speakers } = useSpeakerContext();
  const { addConference } = useConferenceContext();

  const [conferenceName, setConferenceName] = useState('');
  const [conferenceDate, setConferenceDate] = useState<Date | string>('');
  const [conferenceLocation, setConferenceLocation] = useState('');
  const [conferenceEmail, setConferenceEmail] = useState('');
  const [selectedSpeakers, setSelectedSpeakers] = useState<number[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [showAlert, setShowAlert] = useState(false);

  document.title = `Tworzenie konferencji`

  const closeAlert = () => {
    setShowAlert(false);
  };
  const triggerAlert = () => {
    setShowAlert(true);
  };

  const handleSpeakerCheckboxChange = (speakerId: number) => {
    setSelectedSpeakers((prevSelectedSpeakers) => {
      if (prevSelectedSpeakers.includes(speakerId)) {
        return prevSelectedSpeakers.filter((id) => id !== speakerId);
      } else {
        return [...prevSelectedSpeakers, speakerId];
      }
    });
  };

  const isDateValid = (selectedDate: Date): boolean => {
    const today = new Date();
    return selectedDate >= today;
  };

  const isLengthValid = (value: string): boolean => {
    return value.trim().length > 2;
  };

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const selectedDate = new Date(conferenceDate);

    if (!isLengthValid(conferenceName)) {
      newErrors.conferenceName = 'Conference Name must be at least 3 characters long.';
    }

    if (!conferenceDate) {
      newErrors.conferenceDate = 'Date is required';
    } else if (!isDateValid(selectedDate)){
      newErrors.conferenceDate = 'Date must not be in the past';
    }else{
      const parsedDate = Date.parse(conferenceDate.toString());
      if (isNaN(parsedDate)) {
        newErrors.conferenceDate = 'Invalid date';
      }
    }

    if (!conferenceLocation.trim()) {
      newErrors.conferenceLocation = 'Location is required';
    }

    if (!conferenceEmail.trim()) {
      newErrors.conferenceEmail = 'Contact email is required';
    } else if (!isEmailValid(conferenceEmail)) {
      newErrors.conferenceEmail = 'Invalid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleCreateConference = () => {
    if(validateForm())
    {
    const newConference = {
      id: Date.now(),
      name: conferenceName,
      date: new Date(conferenceDate),
      location: conferenceLocation,
      email: conferenceEmail,
      speakers: speakers.filter((speaker) => selectedSpeakers.includes(speaker.id)),
    };

    addConference(newConference);
    triggerAlert();
  }
  };

  return (
    <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
      <h2>Create New Conference</h2>
      <label>
        Conference Name:
        <input
          type="text"
          value={conferenceName}
          onChange={(e) => setConferenceName(e.target.value)}
        />
        {errors.conferenceName && <span style={{color: 'red'}}>{errors.conferenceName}</span>}
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          value={conferenceDate instanceof Date ? conferenceDate.toISOString().split('T')[0] : conferenceDate}
          onChange={(e) => setConferenceDate(e.target.value)}
        />
        {errors.conferenceDate && <span style={{color: 'red'}}>{errors.conferenceDate}</span>}
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          value={conferenceLocation}
          onChange={(e) => setConferenceLocation(e.target.value)}
        />
        {errors.conferenceLocation && (
          <span style={{color: 'red'}}>{errors.conferenceLocation}</span>
        )}
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          value={conferenceEmail}
          onChange={(e) => setConferenceEmail(e.target.value)}
        />
        {errors.conferenceEmail && (
          <span style={{color: 'red'}}>{errors.conferenceEmail}</span>
        )}
      </label>
      <br />
      <h3>Select Speakers:</h3>
      {speakers.map((speaker) => (
        <div key={speaker.id}>
          <input
            type="checkbox"
            id={`speaker-${speaker.id}`}
            checked={selectedSpeakers.includes(speaker.id)}
            onChange={() => handleSpeakerCheckboxChange(speaker.id)}
          />
          <label htmlFor={`speaker-${speaker.id}`}>{speaker.name}</label>
        </div>
      ))}
      <br />
      <button onClick={handleCreateConference}>Create Conference</button>
      <br />
      {showAlert && <Alert type="success" message="Conference created !" onClose={closeAlert} />}
    </div>
  );
};

export default CreateConferenceComponent;