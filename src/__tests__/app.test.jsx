import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Routes from '../routes';
import Launch from '../components/Launch';
import Rocket from '../components/Rocket';

// TODO: Learn Enzyme! XXX

configure({ adapter: new Adapter() });

describe('Routes', () => {
  it('renders without crashing', () => {
    mount(<Routes />);
  });
});

describe('Components', () => {
  it('renders Launch component', () => {
    const launch = {
      mission_name: "Test Mission 178",
      rocket: {rocket_type: 'good', rocket_name: 'Falcon 9'}
    };

    const wrapper = shallow(<Launch {...{launch}} />);
    expect(wrapper.find(Launch)).to.have.lengthOf(1);
  });

  it('renders Rocket component', () => {
    const rocket = {rocket_id: 9,
      rocket_name: 'Falcon 9',
      image: 'default.jpg'
    };

    const wrapper = shallow(<Rocket {...rocket} />);
    console.log(wrapper.find(Rocket));
    expect(wrapper.find('.rocket_name')).to.have.lengthOf(1);
  })
});
