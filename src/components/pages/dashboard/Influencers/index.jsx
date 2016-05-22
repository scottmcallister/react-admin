import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreInfluencers = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Influencers.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreInfluencers;