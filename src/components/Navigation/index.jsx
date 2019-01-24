import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navigation = () => {
  return (
    <ul>
      <li><Link to="/">Launches</Link></li>
    </ul>
  );
}

export default Navigation;
