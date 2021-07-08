import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Portal from './Component/Portals';

class App extends Component {
  constructor(props) {
    super(props);
      
    this.state = {click: 0};      
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    // This will trigger when the button inside Portal 
    // is clicked, It updates Parent's state, even though it
    // is not rendered inside the parent DOM element
    this.setState(prevState => ({
      click: prevState.click + 1
    }));
  }
  
  render() {
    return (
      <div onClick={this.handleClick} style={{marginLeft: '10px'}}>
       <p>You have clicked me {this.state.click} times</p>  
       <Portal/>
      </div>
    );
  }
}
  
export default App;
