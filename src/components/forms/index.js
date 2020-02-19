import React from 'react';

export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value.toUpperCase()});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit"/>
      </form>
    );
  }
}

export class EssayForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          value: "Please write an essay about your favorite DOM element."
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({ value: event.target.value})
  }

  handleSubmit(event) {
      alert('An essay was submitted: ' + event.target.value );
      event.preventDefault();
  }

  render() {
      return(
          <form onSubmit={this.handleSubmit}>
              <label>
                  Essay: 
                  <textarea value={this.state.value} onChange={this.handleChange}></textarea>
              </label>
              <input type="submit" value="Submit" />
          </form>
      );
  }
}

export class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + event.target.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange} >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}


/**
 * Manejando multiples inputs
 */
export class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  /**
   * Decide que elemento del estado cambiar mediante el name
   * que reciba en el evento, por lo que mediante ese name se 
   * escoje que elemeto actualizar
   */
  handleInputChange( event ) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guest:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}