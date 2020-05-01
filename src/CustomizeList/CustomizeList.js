import React, { Component } from 'react';
import FEATURES from '../store.js';
import CustomizeListCategory from '../CustomizeListCategory/CustomizeListCategory';
import './CustomizeList.css';


class CustomizeList extends Component {
  render(){
    const features = Object.keys(FEATURES).map((feature, idx) => {
      return (
	<CustomizeListCategory
	    feature={feature}
	    key={idx}
	    id={idx}
	    selected={this.props.selected}
	    updateFeature ={(feature, newValue)=>this.props.updateFeature(feature, newValue)}
	/>
      );
    });

    return (
      <>
	{features}
      </>
    )

  }
}


export default CustomizeList;
