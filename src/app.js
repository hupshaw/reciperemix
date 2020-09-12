import React from 'react';

const meals = ['insert meal here', 'breakfast', 'lunch', 'dinner', 'dessert', 'snack'];

function Mealfill() {
  return (
    <select>
    {meals.map(meal => (
      <option>
        {meal}
      </option>
    ))}
    </select>
  );
}


class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {type: "dessert"}
  }
  render() {
      return (
      <form>
        <p>I'm looking for a </p>
        <Mealfill />
        <p> with </p>
        <input type="text" placeholder="ingredient" onKeyDown="addIngredient()"/>
      </form>
    )
  }
};


export default Selection ;
