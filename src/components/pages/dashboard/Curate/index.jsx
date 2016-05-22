import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreCurate = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Curate.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreCurate;