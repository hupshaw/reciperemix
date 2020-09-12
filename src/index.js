import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const myfirstelement = (
  <h1>List of Foods</h1>
  <ul>
    <li>Cake</li>
    <li>Vegetables</li>
  </ul>
)

ReactDOM.render(myfirstelement, document.getElementById('root')
);
