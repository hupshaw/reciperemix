import React from 'react';
import API from './api.js';

class Instructions extends React.Component {


  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  //forces the page to load from the API before rendering
  //assigns backend response to this.state
  async componentDidMount() {
    const response = await API.post('api/recipe/michael', {
      food: 'oranges'
    });
    var responseData = response.data.recipe.join(' ')
    .replace('[', '')
    .replace(/'/g, '')
    .replace(/,/g, '')
    .replace(/]/g, '');
    //alert(typeof(responseData));
    this.setState({ data: responseData });
  }


  //TODO: Format this.state.data in this function
  formatInstructions() {
    const instructions = "preheat oven, mix dough, serve";
    const instructionList = instructions.split(",");

    return (
      <ol>
      {instructionList.map(instruction => (
        <li>
          {instruction}
          </li>
        ))}
    </ol>
    )
  };

  render() {
    //Use this.state.data when the model is running
    if(this.props.generate===true)
      return ( this.state.data );
    else
      return ( this.formatInstructions() );
  }
}

export default Instructions;
