import React from 'react';
import API from './api.js';
//import Button from './button.js'

class Instructions extends React.Component {

  constructor() {
    super();
    this.state = { data: [] };
  }

  //forces the page to load from the API before rendering
  //assigns backend response to this.state
/*  async componentDidMount() {
    const response = await API.post('api/recipe', {
      food: 'oranges'
    });
    this.setState({ data: response.data.recipe });
  } */



  //TODO: Format this.state.data in this function
  formatInstructions() {
    const instructions = "preheat oven, mix dough, serve";
    const instructionList = instructions.split(",");

    return (
      <ol id="instructions">
      {instructionList.map(instruction => (
        <li class="instruction">
          {instruction}
          </li>
        ))}
    </ol>
    )
  };

  //print the recipe instructions
  render() {
    //Use this.state.data when the model is running
    //return ( this.state.data );
    return ( this.formatInstructions() );
  }
}

export default Instructions;
