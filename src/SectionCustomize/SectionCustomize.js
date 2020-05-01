import React, { Component } from 'react';
import CustomizeList from '../CustomizeList/CustomizeList';

import './SectionCustomize.css';

class SectionCustomize extends Component {
  render(){
    return (
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <CustomizeList
                currency={this.props.currency}
                selected={this.props.selected}
                updateFeature ={(feature, newValue)=>this.props.updateFeature(feature, newValue)}
            />
          </form>
    )

  }
}

export default SectionCustomize;
