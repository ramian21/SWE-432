import React from 'react';
import './App.css';
import Hooks from './Hooks';
import PiggyTitle from './PiggyTitle';
import PiggyForm from './PiggyForm';

function App() {
  return (
    <div className="App">
        <PiggyTitle/>
        <PiggyForm/>
        <Hooks/>
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

export default App;
