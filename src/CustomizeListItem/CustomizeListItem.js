import React, { Component } from 'react';
import FEATURES from '../store.js';
import USCurrencyFormat from '../currency.js';
import slugify from 'slugify';

import './CustomizeListItem.css';


class CustomizeListItem extends Component {

  render(){
    const item = FEATURES[this.props.feature][this.props.id];
    const itemHash = slugify(JSON.stringify(item));

    return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(this.props.feature)}
              checked={item.name === this.props.selected[this.props.feature].name}
              onChange={e => this.props.updateFeature(this.props.feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
    );
  }
}


export default CustomizeListItem;
