import React, { Component } from "react";
import Dragoncard from "./Dragoncard";

class Dragondex extends Component {
  static defaultProps = {
    dragonball: [
      { id: 4, name: "Goku", type: "Ultra Instinct", base_experience: 100000 },
      {
        id: 7,
        name: "Vegeta",
        type: "Super Sayain 4",
        base_experience: 100000,
      },
      { id: 11, name: "Gohan", type: "Super Sayain 2", base_experience: 50000 },
      { id: 12, name: "Trunks", type: "Super Sayain", base_experience: 10000 },
      { id: 25, name: "Piccolo", type: "Regular", base_experience: 5000 },
      { id: 39, name: "Bulma", type: "Non-Fighter", base_experience: 25 },
      {
        id: 94,
        name: "Gotenks",
        type: "Super Sayain 3",
        base_experience: 70000,
      },
      { id: 133, name: "Chi Chi", type: "Non-Fighter", base_experience: 50 },
    ],
  };
  render() {
    return (
      <div className="Dragondex">
        <h3>Dragondex!</h3>
        {this.props.dragonball.map((d) => (
          <Dragoncard
            id={d.id}
            name={d.name}
            type={d.type}
            exp={d.base_experience}
          />
        ))}
      </div>
    );
  }
}

export default Dragondex;
