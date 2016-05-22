import React from "react";
import Router, { Link, RouteHandler } from "react-router";

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import $ from "jquery";
import classNames from "classnames";

var HomePage = React.createClass({
    
  componentWillMount: function() {
    this.setState({Height: $(window).height()});
  },

  componentDidMount: function() {

  },

  componentWillUnmount: function(){
    
    $(window).unbind('resize',this.adjustResize);

  },

  getInitialState: function(){
    
    return {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true
    };

  },

  toggleMenu: function(){
    if($(".navbar-collapse").hasClass('collapse')){
      $(".navbar-collapse").removeClass('collapse');  
    }
    else{
      $(".navbar-collapse").addClass('collapse');
    }
  },

  render: function() {

    return (
        <div id="wrapper" className="content">

          <Navbar inverse={true} brand={<span>
            <span>&nbsp;Social Commerce</span>
            <button type="button" className="navbar-toggle" onClick={this.toggleMenu} style={{position: 'absolute', right: 0, top: 0}}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            </span>} fluid={true}  style={ {margin: 0} }>
            <ul className="nav navbar-top-links navbar-right">
              <Nav style={ {margin: 0} }>

                <NavDropdown title=<i className="fa fa-user fa-fw"></i> >
                  <MenuItem eventKey="1">
                    <i className="fa fa-user fa-fw"></i> User Profile
                  </MenuItem> 
                  <MenuItem eventKey="2">
                    <i className="fa fa-gear fa-fw"></i> Settings
                  </MenuItem> 
                  <MenuItem eventKey="4">
                    <Link to="login">
                      <i className="fa fa-sign-out fa-fw"></i> Logout
                    </Link>
                  </MenuItem>
                </NavDropdown>
              </Nav>
            </ul> 
            <div className="navbar-default sidebar" style={ { 'marginLeft': '-20px' } } role="navigation">
              <div className="sidebar-nav navbar-collapse">
                
                <ul className="nav in" id="side-menu">
              
                  <li>
                    <Link to="dashboard.home"><i className="fa fa-dashboard fa-fw"></i> &nbsp;Overview</Link>
                  </li>
                  
                  <li>
                    <Link to="dashboard.inbox"><i className="fa fa-inbox fa-fw"></i> &nbsp;Inbox</Link>
                  </li>
                        
                  <li className={classNames({'active': !this.state.chartsElementsCollapsed})}>
                    <Link to="dashboard.hashtags"><i className="fa fa-hashtag fa-fw"></i> &nbsp;Hashtags</Link>
                  </li>
              
                  <li> 
                    <Link to="dashboard.curate"><i className="fa fa-thumbs-o-up fa-fw"></i> &nbsp;Curate</Link>
                  </li> 
              
                  <li> 
                    <Link to="dashboard.influencers"><i className="fa fa-users fa-fw"></i> Influencers</Link> 
                  </li>
                    
                  <li className={classNames({'active': !this.state.uiElementsCollapsed})}> 
                    <Link to="dashboard.reporting"><i className="fa fa-line-chart fa-fw"></i> Reporting</Link> 
                  </li>
                    
                  <li className={classNames({'active': !this.state.multiLevelDropdownCollapsed})}>
                    <Link to="dashboard.integrations">
                      <i className="fa fa-puzzle-piece fa-fw"></i>&nbsp;Integrations
                    </Link>
                  </li> 
                
                  <li>
                    <Link to="dashboard.settings"><i className="fa fa-gear fa-fw"></i>&nbsp;Settings</Link>
                  </li>

                </ul>

              </div>
            </div>

          </Navbar>

          <div id="page-wrapper" className="page-wrapper" ref="pageWrapper" style={{minHeight: this.state.Height}}>
            <RouteHandler {...this.props} />
          </div>

        </div>

    );
  },

  statics: {
    fetchData: function(params) {
      }
  }
  
});

export default HomePage;
