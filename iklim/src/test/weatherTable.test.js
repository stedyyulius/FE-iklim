import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import store from '../store';
import WeatherTable from '../View/Components/WeatherTable';

configure({ adapter: new Adapter() });

describe('<WeatherTable />', () => {
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
    const component = shallow(<WeatherTable store={store} weather={weathers} />);
    expect(component).toMatchSnapshot();
  });

   it('should have 3 table headers', () => {
    const component = shallow(<WeatherTable store={store} />);
    expect(component.render().find('table').find('thead').find('tr').find('th')).toHaveLength(3);
  });

  it('should have suhu column', () => {
   const component = shallow(<WeatherTable store={store} />);
   expect(component.render().find('table').find('thead').find('tr').find('.suhu').text()).toEqual('Suhu');
  });

  it('should have perbedaan column', () => {
   const component = shallow(<WeatherTable store={store} />);
   expect(component.render().find('table').find('thead').find('tr').find('.perbedaan').text()).toEqual('Perbedaan');
  });

  it('should have rata-rata column', () => {
   const component = shallow(<WeatherTable store={store} />);
   expect(component.render().find('table').find('tbody').find('tr').find('.rata-rata').text()).toEqual('Rata-rata');
  });
});
