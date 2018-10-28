import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css';

import { formatDate } from '../../../helpers/formatDate';
import { tempDifference } from '../../../helpers/tempDifference';
import { tempAverage } from '../../../helpers/tempAverage';
import { tempDiffAverage } from '../../../helpers/tempDiffAverage';


class CityDropdown extends Component {

  render() {
    return (
      <div className="table-section">
        <table className="table-bordered">
          <thead>
            <tr>
              <th>{this.props.city}</th>
              <th className="suhu">Suhu</th>
              <th className="perbedaan">Perbedaan</th>
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
              <td className="rata-rata"><b>Rata-rata</b></td>
              <td><b>{tempAverage(this.props.weather)}C</b></td>
              <td><b>{tempDiffAverage(this.props.weather)}</b></td>
            </tr>
          </tbody>
        </table>
     </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    city: state.city,
    weather: state.weather,
  }
}

export default connect(mapStateToProps)(CityDropdown);
