import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      count: 0,
    };
  }

  updateNameHandler = (newName) => {
    this.setState(previousState => {
      return {
        name: newName,
        count: previousState.count + 1,
      }
    })
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>Name: {this.state.name}</div>
        <div># of Updates: {this.state.count}</div>
        <Form 
          name={this.state.name}
          updateNameHandler={this.updateNameHandler}
          handleChange={this.handleChange}
        />
      </React.Fragment>
    );
  }
}



const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
