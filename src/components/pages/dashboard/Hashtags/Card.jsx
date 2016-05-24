import React, { PropTypes, Component } from 'react';

export default class Card extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="card">
            <img className="card-img-top" src={this.props.image} alt={this.props.image}/>
            <div className="card-block">
                <h4>{this.props.username}</h4>
                <p className="card-text">{this.props.text}</p>
            </div>
            </div>
        );
    }
    
}