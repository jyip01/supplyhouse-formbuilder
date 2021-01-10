import React, { Component } from 'react';
import { render } from 'react-dom';
import { ReactTabforms } from './form';
import { Accordion } from './accordion';

import { TabComponent, TabItemDirective, TabItemsDirective } from "@syncfusion/ej2-react-navigations";

import './style.css';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {...props}
  }

  render() {
    return (
      <div>
        <TabComponent height='Auto' id='defaultTab'>
                <div className="e-tab-header">
                  <div>Form Builder</div>
                  <div>Preview</div>
                  
                </div>
                <div className="e-content">
                  <div>
                    <ReactTabforms />
                  </div>
                  <div>
                    <Accordion />
                  </div>
                  {/*<div>
                    <ReactTabforms />
                  </div>*/}
                </div>
        </TabComponent>
      </div>
    );
  }
}

export default Tab;
