import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import store from '../store';
import Main from '../View/Main';

configure({ adapter: new Adapter() });

describe('<Main />', () => {
  it('should render correctly', () => {
    const component = shallow(<Provider store={store}><Main /></Provider>);
    expect(component).toMatchSnapshot();
  });

  it('should have title', () => {
    const component = mount(<Provider store={store}><Main /></Provider>);
    expect(component.render().find('.title')).toHaveLength(1);
  });

});
