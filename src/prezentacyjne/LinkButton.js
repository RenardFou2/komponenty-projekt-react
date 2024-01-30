import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ label, adres }) => {
  return (
    <Link to={adres}>
    <button>
      {label}
    </button>
    </Link>
  );
};

export default LinkButton;