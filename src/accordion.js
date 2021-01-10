import React from 'react';
import { render } from 'react-dom';

import ReactTabforms from './form';
import './style.css';

import {
  AccordionComponent,
  AccordionItemDirective,
  AccordionItemsDirective
} from "@syncfusion/ej2-react-navigations";


export class Accordion extends React.Component {
  // headertext = [{ text: "Twitter" },
  // { text: "Facebook" }, { text: "WhatsApp" }];
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AccordionComponent id="accordion" height='Auto' overflow="scroll" className="e-fill" >
          <div> 
            <div>
                <div>Question 1 </div>
            </div>
            <div>
                <div>
                  <ReactTabforms id="1" />
                </div>
             </div>
          </div>
          
        </AccordionComponent>
      </div>
    );
  }
}

export default Accordion;