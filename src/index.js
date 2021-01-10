import React, { Component } from 'react';
import { render } from 'react-dom';
import { Form } from "react-final-form";

import { ReactTabforms } from './form';
import Tab from "./tab";
import Styles from "./Styles";

import './style.css';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  //window.alert(JSON.stringify(values));
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <Styles>
      <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Tab /><br/><br/>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
            </button>
                <button type="button" onClick={reset} disabled={submitting}>
                  Reset
            </button>
              </div>
              {/* <pre>{JSON.stringify(values)}</pre> */}
            </form>

          )}
        />
         </Styles>
      </div>
      
    );
  }
}

render(<App />, document.getElementById('root'));
