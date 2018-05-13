import React, {Component} from 'react';
import {TopNavBar} from './TopNavBar';
import {Main} from './Main';

class App extends Component {
  render() {
    return (
        <div className="App">
          <TopNavBar/>
          <Main/>
          <p>
               </p>
        </div>
    );
  }
}

export default App;