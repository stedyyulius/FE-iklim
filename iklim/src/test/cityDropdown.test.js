import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import store from '../store';
import CityDropdown from '../View/Components/CityDropdown';

configure({ adapter: new Adapter() });

describe('<CityDropdown />', () => {

  it('There should be dropdown select city function', () => {
    const component = mount(<CityDropdown store={store} />);
    component
      .find('select.select-city')
      .simulate('click');
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('should have 4 options', () => {
   const component = mount(<CityDropdown store={store} />);
   expect(component.find('select.select-city').find('option')).toHaveLength(4);
  });

  it('should have Select a city option', () => {
   const component = shallow(<CityDropdown store={store} />);
   expect(component.render().find('.select-city').find('.select').text()).toEqual('Select a city');
  });

  it('should have Jakarta option', () => {
   const component = shallow(<CityDropdown store={store} />);
   expect(component.render().find('.select-city').find('.jakarta').text()).toEqual('Jakarta');
  });

  it('should have Singapore  option', () => {
   const component = shallow(<CityDropdown store={store} />);
   expect(component.render().find('.select-city').find('.singapore').text()).toEqual('Singapore');
  });

  it('should have Bangkok  option', () => {
   const component = shallow(<CityDropdown store={store} />);
   expect(component.render().find('.select-city').find('.bangkok').text()).toEqual('Bangkok');
  });

});
