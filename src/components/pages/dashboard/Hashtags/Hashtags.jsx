import React, { PropTypes, Component } from 'react';
import {NavDropdown, MenuItem, DropdownButton, Navbar, Nav, NavItem, Panel, PageHeader, ListGroup, ListGroupItem, Button} from "react-bootstrap";

import StatWidget from "../../../common/StatWidget.js";
import * as HashtagActions from "../../../../actions/HashtagActions.js";
import HashtagStore from "../../../../stores/HashtagStore.js";
import Card from "./Card";

export default class Hashtags extends React.Component{
  
  constructor(){
    super();
    this.state = {
        query: '',
        hashtags: HashtagStore.getAll()
    };
  }
  
  componentWillMount(){
    HashtagStore.on("change", () =>{
      this.setState({
        query: '',
        hashtags: HashtagStore.getAll()
      });
    });
  }
  
  createHashtag() {
    HashtagActions.createHashtag(Date.now());
  }
  
  searchByTag(){
    HashtagActions.searchByTag(this.state.query);
  }
  
  handleInput(e){
    this.setState({ 
      query: e.target.value
    });
  }

  render() {
    
    const { hashtags } = this.state;
    
    const HashtagList = hashtags.map((item) => {
      return <Card id={item.id} text={item.text} image={item.image} username={item.username}/>;
    });
    
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Hashtags</PageHeader>
          </div>
          <div className="col-lg-6 col-lg-offset-3 text-center form-group">
              <input className="form-control" type="text" value={this.state.query} onChange={this.handleInput.bind(this)} />
              <button className="btn btn-primary form-control" onClick={this.searchByTag.bind(this)}>Search</button>
          </div>
          <ul>
            { HashtagList }
          </ul>
        </div>
      </div>
    );
  }
}