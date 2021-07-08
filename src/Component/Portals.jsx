import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

export default class Portal extends Component {
    
    render() {
    
      // Creating portal
      return ReactDOM.createPortal(
        <button style={{marginLeft: '10px'}}>
          Click
        </button>,
        document.getElementById('portal')
      );
    }
  }
