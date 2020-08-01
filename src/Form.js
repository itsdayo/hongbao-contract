import React from 'react';

class Form extends React.Component {
  componentDidMount = () => {
    console.log(this.props);
  };
  handleChange = (event) => {
    // if (event.target.name === 'amount') {
    // } else if (event.target.name === 'street-address') {
    // } else if (event.target.name === 'city') {
    // } else if (event.target.name === 'state') {
    // } else if (event.target.name === 'zip') {
    // } else if (event.target.name === 'message') {
    // }
    console.log(this.state);
    this.setState((prevState) => ({
      form: {
        // object that we want to update
        ...prevState.form, // keep all other key-value pairs
        [event.target.name]: event.target.value, // update the value of specific key
      },
    }));
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <fieldset>
          <input
            name="amount"
            placeholder="Amount 0.00"
            type="number"
            min="0"
            step="0.01"
            tabindex="1"
            required
            autofocus
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Street Address"
            name="street-address"
            type="text"
            tabindex="2"
            required
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="City"
            name="city"
            type="tel"
            tabindex="3"
            required
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="State"
            name="state"
            type="url"
            tabindex="4"
            required
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Zip Code"
            name="zip"
            type="url"
            tabindex="4"
            required
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Message"
            name="message"
            tabindex="5"
            onChange={this.handleChange}
            required
          ></textarea>
        </fieldset>
      </div>
    );
  }
}

export default Form;
