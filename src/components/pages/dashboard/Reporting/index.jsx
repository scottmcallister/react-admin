import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreReporting = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Reporting.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreReporting;