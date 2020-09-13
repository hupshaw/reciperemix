import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Selection from './app.js';
import Instructions from './instructions.js';
// import MixItUp from './button.js';

const food = {
  dish: "pavlova",
  flavor: "sweet"
}


ReactDOM.render(<Selection recipe={food}/>, document.getElementById('customize')
);
ReactDOM.render(<Instructions />, document.getElementById('instructions')
);

export default food;
