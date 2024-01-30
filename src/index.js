import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConferenceProvider } from './contextAndTypes/ConferenceContext.tsx';
import { SpeakerProvider } from './contextAndTypes/SpeakerContext.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SpeakerProvider>
    <ConferenceProvider>
    <App />
    </ConferenceProvider>
    </SpeakerProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
