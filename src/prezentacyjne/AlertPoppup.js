import React from 'react';
import '../styles.css';

const AlertPoppup = ({ type, message, onClose }) => {
  return (
    <div className={`alert ${type}`} style={{ textAlign: 'left', paddingLeft: '20px' }}>
      <span className="close" onClick={onClose}>&times;</span>
      {message}
    </div>
  );
};

export default AlertPoppup;