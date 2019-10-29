import React, {Component} from 'react';
import Navigation from './src/Navigation';
import {StatusBar} from 'react-native';
// import {Provider} from 'react-redux';
// import store from './src/Public/Redux/store';

class App extends React.Component {
  render() {
    return (
      <>
        {/* <Provider store={store}> */}
        <StatusBar backgroundColor={'#bdc3c7'} />
        <Navigation />
        {/* </Provider> */}
      </>
    );
  }
}
export default App;
