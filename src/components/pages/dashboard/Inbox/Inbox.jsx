import React, { PropTypes, Component } from 'react';
import {NavDropdown, MenuItem, DropdownButton, Navbar, Nav, NavItem, Panel, PageHeader, ListGroup, ListGroupItem, Button} from "react-bootstrap";

import StatWidget from "../../../common/StatWidget.js";

var Inbox = React.createClass({

  render: function() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Inbox</PageHeader>
          </div>
        </div>
      </div>
    );
  }

});

export default Inbox;