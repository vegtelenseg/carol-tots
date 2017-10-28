import React, { Component } from 'react';
import Nav from './nav';
import Hero from './hero';
import Body from './body';
import Foot from './footer';

class App extends Component {
    render() {
        return (
          <div className="App">
            <Nav/>
            <Hero/>
            <Body/>
            <Foot/>
          </div>
        );
    }
}

export default App;
