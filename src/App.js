import React, { Component } from 'react';
import './App.css';
import Hooks from './Hooks';
import PiggyTitle from './PiggyTitle';
import PiggyForm from './PiggyForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1"
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <PiggyTitle />
        <PiggyForm />

        <Hooks />
      </div>
    );
  }

  // function App() {
  //   return (
  //     <div className="App">
  //       <Fetcher url={'https://randomuser.me/api/'}/>
  //     </div>
  //   );
  // }
}

export default App; 