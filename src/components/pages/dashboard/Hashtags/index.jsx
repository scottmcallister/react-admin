import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreHashtags = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Hashtags.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreHashtags;