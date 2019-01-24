import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import Launch from '../components/Launch';

class LaunchesView extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    const { dispatch, launchCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchCollection });
    this.setState({ isLoading: launchCollection.fetching })
  }

  getContent() {
    const { launchCollection } = this.props;

    return launchCollection.launches.map((launch)=> {
      return <Launch {...{
        key: launch.launch_id,
        launch
      }}  />
    })
  }

  render() {
    const launches = this.getContent();
    const { isLoading } = this.state;

    return (
      <div>
        <h2> SpaceX launches </h2>
        <div className="launches">
        {isLoading ? <progress></progress> : launches}
        </div>
      </div>
    )
  }
}

export default ConnectedView(LaunchesView, 'launches');
