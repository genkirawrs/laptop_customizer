import React, { Component } from 'react';
import slugify from 'slugify';

import './CustomizeListItem.css';


class CustomizeListItem extends Component {

  render(){
    const itemHash = slugify(JSON.stringify(this.props.item));
console.log(this.props.updateFeature);
    return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(this.props.feature)}
              checked={this.props.item.name === this.props.selected[this.props.feature].name}
              onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {this.props.item.name} ({this.props.currency.format(this.props.item.cost)})
            </label>
          </div>
    );
  }
}


export default CustomizeListItem;
