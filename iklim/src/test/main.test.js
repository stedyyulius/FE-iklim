import React from 'react';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom'
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import store from '../store';
import Main from '../View/Main';
import getCityWeathers from '../Controller'

configure({ adapter: new Adapter() });

describe('MyComponent', () => {
  it('should render correctly', () => {
    const component = shallow(<Main store={store}  />);
    expect(component).toMatchSnapshot();
  });

  it('should render table correctly with given weathers', () => {
    const weathers = [
      {
        dt: 12345,
        main: {
          temp: 1,
          temp_min: 0,
          temp_max: 2,
        },
      },
      {
        dt: 54321,
        main: {
          temp: 1,
          temp_min: 2,
          temp_max: 3,
        },
      },
    ];
    const component = shallow(<Main store={store} weather={weathers} />);
    expect(component).toMatchSnapshot();
  });

  it('There should be dropdown select city function', () => {
    const component = mount(<Main store={store} />);
    component
      .find('select.select-city')
      .simulate('click');
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('should have title', () => {
    const component = shallow(<Main store={store} />);
    expect(component.render().find('.title')).toHaveLength(1);
  });

   it('should have 3 table headers', () => {
    const component = shallow(<Main store={store} />);
    expect(component.render().find('table').find('thead').find('tr').find('th')).toHaveLength(3);
  });

  it('should have suhu column', () => {
   const component = shallow(<Main store={store} />);
   expect(component.render().find('table').find('thead').find('tr').find('.suhu').text()).toEqual('Suhu');
  });

  it('should have perbedaan column', () => {
   const component = shallow(<Main store={store} />);
   expect(component.render().find('table').find('thead').find('tr').find('.perbedaan').text()).toEqual('Perbedaan');
  });

  it('should have rata-rata column', () => {
   const component = shallow(<Main store={store} />);
   expect(component.render().find('table').find('tbody').find('tr').find('.rata-rata').text()).toEqual('Rata-rata');
  });

});
