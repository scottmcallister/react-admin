import React, { PropTypes, Component } from 'react';
import {NavDropdown, MenuItem, DropdownButton, Navbar, Nav, NavItem, Panel, PageHeader, ListGroup, ListGroupItem, Button} from "react-bootstrap";

import StatWidget from "../../../common/StatWidget.js";

var Hashtags = React.createClass({

  render: function() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Hashtags</PageHeader>
          </div>
        </div>
      </div>
    );
  }

});

export default Hashtags;