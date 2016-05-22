import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreIntegrations = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Integrations.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreIntegrations;