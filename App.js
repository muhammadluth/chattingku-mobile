import React, {Component} from 'react';
import Navigation from './src/Navigation';
import {StatusBar} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor={'#bdc3c7'} />
        <Navigation />
      </>
    );
  }
}
export default App;
