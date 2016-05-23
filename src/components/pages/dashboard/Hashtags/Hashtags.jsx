import React, { PropTypes, Component } from 'react';
import {NavDropdown, MenuItem, DropdownButton, Navbar, Nav, NavItem, Panel, PageHeader, ListGroup, ListGroupItem, Button} from "react-bootstrap";

import StatWidget from "../../../common/StatWidget.js";
import * as HashtagActions from "../../../../actions/HashtagActions.js";
import HashtagStore from "../../../../stores/HashtagStore.js";

export default class Hashtags extends React.Component{
  
  constructor(){
    super();
    this.state = {
      hashtags: HashtagStore.getAll()
    };
  }
  
  componentWillMount(){
    HashtagStore.on("change", () =>{
      this.setState({
        hashtags: HashtagStore.getAll()
      });
    });
  }
  
  createHashtag() {
    HashtagActions.createHashtag(Date.now());
  }
  
  searchByTag(){
    HashtagActions.searchByTag("beingacreeper");
  }

  render() {
    
    const { hashtags } = this.state;
    
    const HashtagList = hashtags.map((item) => {
      return <li>#{item.hashtag}</li>;
    });
    
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Hashtags</PageHeader>
          </div>
          <button addClass="btn btn-default" onClick={this.searchByTag.bind(this)}>Create</button>
          <ul>
            { HashtagList }
          </ul>
        </div>
      </div>
    );
  }
}