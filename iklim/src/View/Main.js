import React, { Component } from 'react';

import './index.css';

import CityDropdown from './Components/CityDropdown';
import WeatherTable from './Components/WeatherTable';

class Main extends Component {

  render() {
    return (
      <div>
        <h1 className="title">FE - Iklim</h1>
        <CityDropdown />
        <WeatherTable />
      </div>
    )
  }
}

export default Main;
