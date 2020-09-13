import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Selection from './app.js';
import Instructions from './instructions.js';

const food = {
  dish: "pavlova",
  flavor: "sweet"
}

const genTrue = true;
const genFalse = false;
class MixItUp extends React.Component {

  generateRecipe() {
    ReactDOM.render(<Instructions generate={genTrue}/>, document.getElementById('instructions'));
  }

  render() {
    return (
      <button type="button" onClick={this.generateRecipe}>
        Mix it up!
      </button>
    )
  }
}

ReactDOM.render(<Selection recipe={food}/>, document.getElementById('customize'));
ReactDOM.render(<Instructions generate={genFalse}/>, document.getElementById('instructions'));
ReactDOM.render(<MixItUp />, document.getElementById('mixitup'));

export default food;
