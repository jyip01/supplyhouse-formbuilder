import React from 'react';
import './style.css';
import styled, { css } from 'styled-components'
import { Form, Field } from "react-final-form";
import Styles from "./Styles";



export class ReactTabforms extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Styles>
        <div>
          
          <Field
            name="formTitle"
            component="input"
            type="text"
            placeholder="Form title"
            required
          />
        </div>

        <Field
          name="formDescription"
          class="formDescription"
          component="textarea"
          type="text"
          placeholder="Form description"
        >
          {({ input, meta: { error, touched }, ...rest }) => (
            <div>
              <input {...input} {...rest} />
              {error && touched && <span>{error}</span>}
            </div>
          )}
        </Field>

        <div>
          <Field
            name="Question 1"
            type="text"
            component="input"
            placeholder="Question 1"
            required
          />
        </div>

        <div>
          <Field
            name="Type"
            component="select"
            required
          >
            <option type="text">Choose one</option>
            <option type="text">Short Answer</option>
            <option type="text" component="textarea">Paragraph</option>
            {/* <option type="radioButton">Multiple Choice</option> */}
          </Field>
        </div>

        <div>
          <Field 
            name="notes" 
            component="textarea" 
            placeholder="Answer" />
        </div>
      </Styles>
    );
  }
}

export default ReactTabforms;