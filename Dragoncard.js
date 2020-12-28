import React, { Component } from "react";
import "./Dragoncard.css";
const Goku =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/deed2e62-13e2-4b5a-b1b0-6f33e9ae66a6/dbr20h3-1668d477-eba6-4db7-81c0-df74a27a0eda.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGVlZDJlNjItMTNlMi00YjVhLWIxYjAtNmYzM2U5YWU2NmE2XC9kYnIyMGgzLTE2NjhkNDc3LWViYTYtNGRiNy04MWMwLWRmNzRhMjdhMGVkYS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.X0YjF6ekYsN279iUxQ5ioAAxAe6WsVRPPpgfqABQCvI";
const Vegeta =
  "https://www.pngitem.com/pimgs/m/86-862217_image-ssj4-vegeta-dokkan-battle-hd-png-download.png";
class Dragoncard extends Component {
  render() {
    return (
      <div className="Dragoncard">
        <h1>{this.props.name}</h1>
        <img src={this.name} />
        <div>Type: {this.props.type}</div>
        <div>EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Dragoncard;
