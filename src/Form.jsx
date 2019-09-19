import React from 'react';

class Form extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.updateNameHandler(this.props.name);
  }

  render() {
    return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          value={this.props.name}
          onChange={this.props.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}

export default Form;