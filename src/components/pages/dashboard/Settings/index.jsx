import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreSettings = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Settings.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreSettings;