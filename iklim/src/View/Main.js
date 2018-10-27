import React, { Component } from 'react';
import { connect } from 'react-redux'

import './index.css';

import { getCityWeathers } from '../Controller'

import { formatDate } from '../helpers/formatDate';
import { tempDifference } from '../helpers/tempDifference';
import { tempAverage } from '../helpers/tempAverage';
import { tempDiffAverage } from '../helpers/tempDiffAverage';


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: 'Select The City'
    }
  }

  selectCity(city) {
    this.setState({
      city: city,
    })
    this.props.getCityWeathers(city);
  }

  render() {
    return (
      <div>
        <h1 className="title">FE - Iklim</h1>
        <select className="select-city" onChange={(e) => this.selectCity(e.target.value)}>
          <option defaultValue>Select City</option>
          <option>Jakarta</option>
          <option>Singapore</option>
          <option>Bangkok</option>
        </select>
        <div className="table-section">
          <table className="table-bordered">
            <thead>
              <tr>
                <th>{this.state.city}</th>
                <th>Suhu</th>
                <th>Perbedaan</th>
              </tr>
            </thead>
            <tbody>
              {this.props.weather.map((weather, i) =>
                <tr key={i}>
                  <td>{formatDate(weather.dt)}</td>
                  <td>{Math.round(weather.main.temp)}C</td>
                  <td>{tempDifference(weather.main.temp_max, weather.main.temp_min)}C</td>
                </tr>
              )}
              <tr>
                <td><b>Rata-rata</b></td>
                <td><b>{tempAverage(this.props.weather)}C</b></td>
                <td><b>{tempDiffAverage(this.props.weather)}</b></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCityWeathers: (city) => dispatch(getCityWeathers(city)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
