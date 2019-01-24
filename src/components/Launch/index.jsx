import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

const Launch = (props) => {

  const { launch } = props;

  return (
    <div className="launch">
      <h2> {launch.mission_name} </h2>
      <Link to={`${launch.rocket.rocket_id}`}>
        <p> {launch.rocket.rocket_name} </p>
      </Link>
      <p> {launch.details} </p>
    </div>
  );
}

Launch.propTypes = {
  launch: PropTypes.object
};

export default Launch;