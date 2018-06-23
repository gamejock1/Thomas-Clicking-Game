import React, { Component } from 'react';
import './clickPic.css';

class ClickPic extends Component {

  constructor(){
    super();
    this.state = {
      clicked: false
    }
  }

  render(){
    return (
        <img src={this.props.imgUrl} onClick={this.props.click} alt=""/>
    )
  }



}


export default ClickPic;