import React from "react";

class Form extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.weatherMethod(e);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="city" placeholder="Город" />
        <button>Получить погоду</button>
      </form>
    );
  }
}

export default Form;