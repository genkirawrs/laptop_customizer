import React, { Component } from 'react';
import CustomizeListCategory from '../CustomizeListCategory/CustomizeListCategory';
import './CustomizeList.css';


const FEATURES = {
  Processor: [
    { 
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700
    },
    { 
      name: 'Professor X AMD Fire Breather with sidewinder technology',
      cost: 1200
    }
  ],
  "Operating System": [
    { 
      name: 'Ubuntu Linux 16.04',
      cost: 200
    },
    { 
      name: 'Bodhi Linux',
      cost: 300
    }
  ],
  "Video Card": [
    { 
      name: 'Toyota Corolla 1.5v',
      cost: 1150.98
    },
    { 
      name: 'Mind mild breeze 2000',
      cost: 1345
    }
  ],
  Display: [
    { 
      name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
      cost: 1500
    },
    { 
      name: '15.3" HGTV (3840 x 2160) Home makeover edition',
      cost: 1400
    },
  ]
};


class CustomizeList extends Component {
  render(){
    const features = Object.keys(FEATURES).map((feature, idx) => {
      return (
	<CustomizeListCategory
	    feature={feature}
	    key={idx}
	    id={idx}
	    options={FEATURES[feature]}
	    selected={this.props.selected}
	    currency={this.props.currency}
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
