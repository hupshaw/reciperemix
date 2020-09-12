import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Selection from './app.js';

const food = {
  dish: "pavlova",
  flavor: "sweet"
}

ReactDOM.render(<Selection recipe={food}/>, document.getElementById('customize')
);

export default food;
