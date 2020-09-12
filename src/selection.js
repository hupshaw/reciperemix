import React from 'react';
import ReactDOM from 'react-dom';

class Customize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <p>I am looking for a</p>
        <select name="meal" id="meal">
        </select>
        <p>containing</p>
        <form>
        </form>
      </div>
    )
  }
};


ReactDOM.render(<Customize />, document.getElementById('customize'));
