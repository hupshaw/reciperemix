import React from 'react';

var genRec;
class Button extends React.Component {

  constructor() {
    super();
    genRec = false;
  }

  generateRecipe() {
    genRec = true;
  }

  shouldIGenerate() {
    genRec = false;
    return genRec;
  }

  render() {
    return (
      <button type="button" onclick={this.generateRecipe}>
        Mix it up!
      </button>
    )
  }
};

export default Button;
