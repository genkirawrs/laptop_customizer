import React, { Component } from 'react';
import Cart from '../Cart/Cart';
import Total from '../Total/Total';

import './SectionSummary.css';

class SectionSummary extends Component {
  render(){
    return (
          <section className="main__summary">
            <h2>Your cart</h2>
            <Cart
                selected={this.props.selected}
            />
            <Total
                selected={this.props.selected}
            />
          </section>
    )

  }
}

export default SectionSummary;
