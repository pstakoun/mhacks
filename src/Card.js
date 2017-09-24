import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h2>{this.props.title}</h2>
        <h3>{this.props.subtitle}</h3>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default Card;
