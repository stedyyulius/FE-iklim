import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCityWeathers } from '../../../Controller';

class CityDropdown extends Component {

  render() {
    return (
      <div>
        <select className="select-city" onChange={(e) => this.props.getCityWeathers(e.target.value)}>
          <option className="select">Select a city</option>
          <option className="jakarta">Jakarta</option>
          <option className="singapore">Singapore</option>
          <option className="bangkok">Bangkok</option>
        </select>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCityWeathers: (city) => dispatch(getCityWeathers(city)),
  }
}

export default connect(null, mapDispatchToProps)(CityDropdown);
