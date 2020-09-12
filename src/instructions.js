import React from 'react';
import ReactDOM from 'react-dom';

const instructions = "preheat oven, mix dough, serve";

const instructions2 = instructions.split(",");

function Instructions() {
  return (
    <ol>
    {instructions2.map(instruction => (
      <li>
      {instruction}
      </li>
    ))}
    </ol>
  )
};

export default Instructions;
