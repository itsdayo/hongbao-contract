import React, { useState, useEffect } from 'react';
import './form.css';
import Form from './Form';

function RecipientForm() {
  const [formArray, setFormArray] = useState([]);
  const [singleForm, setSingleForm] = useState({});
  const [formValue, setFormValue] = useState({});
  const [emptyForm, setForms] = useState([]);
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  React.useEffect(() => {
    // const createdForm = {
    //   form: {
    //     streetAddress: streetAddress,
    //     city: city,
    //     state: state,
    //     zip: zip,
    //     message: message,
    //   },
    // };

    setStreetAddress(streetAddress);
    setCity(city);
    setState(state);
    setZip(zip);
    setMessage(message);
    setFormValue(formValue);
    setFormArray(formArray);
  });

  const handleChange = (event) => {
    event.persist();

    if (event.target.name === 'amount') {
    } else if (event.target.name === 'street-address') {
      setStreetAddress(event.target.value);
    } else if (event.target.name === 'city') {
      setCity(event.target.value);
    } else if (event.target.name === 'state') {
      setState(event.target.value);
    } else if (event.target.name === 'zip') {
      setZip(event.target.value);
    } else if (event.target.name === 'message') {
      setMessage(event.target.value);
    }

    // React.useEffect(() => {
    //   if (counter > 9) {
    //     clearInterval(s);
    //   }
    // }, [counter]);

    // this.setState({ [event.target.name]: event.target.value  });

    const value = event.target.value;
    const name = event.target.name;
    // let formName = Object.assign({}, prevState.jasper);

    //   this.setState((prevState, formName) => ({
    //     formName: {
    //       // object that we want to update
    //       ...prevState.formName, // keep all other key-value pairs
    //       [event.target.name]: value, // update the value of specific key
    //     },
    //   }));

    //   console.log(this.state);
  };

  const updatingState = () => {
    console.log(streetAddress);
    const createdForm = {
      form: {
        streetAddress: { streetAddress },
        city: city,
        state: state,
        zip: zip,
        message: message,
      },
    };
    const emptyFormArray = formArray;
    emptyFormArray.push(createdForm);
    setFormValue(createdForm);
    setFormArray(emptyFormArray);
    console.log(formValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const createdForm = {
      form: {
        streetAddress: streetAddress,
        city: city,
        state: state,
        zip: zip,
        message: message,
      },
    };

    const emptyFormArray = formArray;
    emptyFormArray.push(formValue);
    setFormValue(createdForm);
    setFormArray(emptyFormArray);
    console.log(formArray);
    // this is just some redux.
    // just trust that it does what it's supposed to do,
    // send an ajax request to my server
  };
  // const setToken = () => {
  //   setFormValue(streetAddress);

  //   console.log('setting token');
  //   console.log(formValue);
  // };

  // React.useEffect(() => {
  //   console.log('using effect');
  //   if (error === false) {
  //     setToken();
  //   }
  // }, [error]); // <== will run when error value is changed.

  const addRecipient = () => {
    const oldForm = formArray;
    oldForm.push('');
    const newform = oldForm;
    setFormArray(newform);

    var newFrm = <Form handleChange={handleChange} />;
    var newForms = emptyForm;
    newForms.push(<Form />);
    setForms(newForms);
    console.log(emptyForm);

    // console.log(forms);
  };
  const newForms = (val) => {
    return val;
  };

  return (
    <div class="container">
      {/* <form id="contact" action="" method="post"> */}
      <form onSubmit={handleSubmit} id="contact">
        <h3>Recipient Form</h3>
        <h4>Contact us for custom quote</h4>
        <fieldset>
          <input
            name="amount"
            placeholder="Amount 0.00"
            type="number"
            min="0"
            step="0.01"
            tabindex="1"
            // required
            autofocus
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Street Address"
            name="street-address"
            type="text"
            tabindex="2"
            // required
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="City"
            name="city"
            type="text"
            tabindex="3"
            // required
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="State"
            name="state"
            type="text"
            tabindex="4"
            // required
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Zip Code"
            name="zip"
            type="text"
            tabindex="4"
            // required
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Message"
            name="message"
            tabindex="5"
            onChange={handleChange}
            // required
          ></textarea>
        </fieldset>
        <fieldset>
          {emptyForm.map(newForms)}
          <button onClick={addRecipient} type="button" data-submit="...Adding">
            Add recipient
          </button>
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </fieldset>
      </form>

      <p class="copyright">
        Designed by{' '}
        <a href="https://colorlib.com" target="_blank" title="Colorlib">
          Colorlib
        </a>
      </p>
    </div>
  );
}

export default RecipientForm;
