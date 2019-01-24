import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import Rocket from '../components/Rocket/index';
import rocketImage from '../static/img/default_rocket.png';

class RocketsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rockets: {}
    }
  }

  componentDidMount() {
    const { launchCollection } = this.props;
    const rockets = {};

    launchCollection.launches.forEach((launch) => {
      const launchImage = this.getRocketImage(launch.links);

      rockets[launch.rocket.rocket_id] = launch.rocket;
      rockets[launch.rocket.rocket_id].image = launchImage;
    });

    this.setState({ rockets });
  }

  /**
   * Launches may or may not have any images. This function will do
   * a search for an image and return a default if not found.
   * @param links Object, links to images
   * @returns String, url to image
   */
  getRocketImage(links){
    const image = links.flickr_images.length > 0
                  ? links.flickr_images[0]
                  : links.mission_patch_small;
    if (!image) { return rocketImage }

    return image
  }

  getRocket(rocketId){
    const { rockets }= this.state;
    return <Rocket {...{...rockets[rocketId], rocketId}} />
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { rocketId } = this.props.match.params;
    const rocket = this.getRocket(rocketId);

    return (
      <div>
        { rocket }
      </div>
    )
  }
}

export default ConnectedView(RocketsView, 'rockets');