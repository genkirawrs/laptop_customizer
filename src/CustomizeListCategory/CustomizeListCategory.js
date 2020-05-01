import React, { Component } from 'react';
import FEATURES from '../store.js';
import CustomizeListItem from '../CustomizeListItem/CustomizeListItem';
import './CustomizeListCategory.css';

class CustomizeListCategory extends Component {

  render(){
      const featureHash = this.props.feature + '-' + this.props.id;
      const options = FEATURES[this.props.feature].map((item,key) => {
        return (
	  <CustomizeListItem 
	    key={key} 
	    id={key}
	    feature={this.props.feature}
	    selected={this.props.selected}
	    updateFeature ={(feature, newValue)=>this.props.updateFeature(feature, newValue)} 
	  />
        );
      });


    return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{this.props.feature}</h3>
          </legend>
	 {options}  
        </fieldset>
    );
  }
}


export default CustomizeListCategory;
