import React from 'react';
import './App.css';
import Fetcher from './Fetcher';
import Hooks from './Hooks';
import PiggyTitle from './PiggyTitle';

function App() {
  return (
    <div className="App">
        <PiggyTitle/>
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
