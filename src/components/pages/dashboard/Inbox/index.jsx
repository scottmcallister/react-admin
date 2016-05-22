import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreInbox = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Inbox.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreInbox;