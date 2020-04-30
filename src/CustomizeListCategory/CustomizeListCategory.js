import React, { Component } from 'react';
import CustomizeListItem from '../CustomizeListItem/CustomizeListItem';
import './CustomizeListCategory.css';

class CustomizeListCategory extends Component {

  render(){
      const featureHash = this.props.feature + '-' + this.props.id;
      const options = this.props.options.map((item,key) => {
        return (
	  <CustomizeListItem 
	    key={key} 
	    item={item}
	    options={this.props.options}
	    feature={this.props.feature}
	    selected={this.props.selected}
	    currency={this.props.currency}
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
