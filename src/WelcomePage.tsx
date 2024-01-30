import React from 'react';
import { Link } from 'react-router-dom';
import { useSpeakerContext } from './contextAndTypes/SpeakerContext.tsx';
import { useConferenceContext } from './contextAndTypes/ConferenceContext.tsx';

const WelcomePage: React.FC = () => {
  const { speakers } = useSpeakerContext();
  const { conferences } = useConferenceContext();

  return (
    <div>
        <h2>Welcome Page</h2>
        {speakers.length} : Number of speakers
        <br />
        {conferences.length} : Number of conferences
        <br />
        <Link to="/speakers">
            <button>
                Manage speakers
            </button>
        </Link>
        <Link to="/conferences">
            <button>
                Manage conferences
            </button>
        </Link>

    </div>
  );
};
export default WelcomePage;