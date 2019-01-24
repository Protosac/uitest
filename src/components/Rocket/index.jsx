/* eslint-disable camelcase */
import React from 'react';
import './styles.css';

const Rocket = (props) => {

  const { rocket_name, rocket_type, image } = props;

  return (
    <div className="rocketCard">
      <img className="rocketImage" src={image} alt={rocket_name}/>
      <h3>{rocket_name}</h3>
      <ul>
        <li>{rocket_type}</li>
      </ul>
    </div>
  );
};

export default Rocket;