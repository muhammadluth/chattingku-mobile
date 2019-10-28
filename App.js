import React, {Component} from 'react';
import Navigation from './src/Navigation';
// import {Provider} from 'react-redux';
// import store from './src/Public/Redux/store';

class App extends React.Component {
  render() {
    return (
      <>
        {/* <Provider store={store}> */}
        <Navigation />
        {/* </Provider> */}
      </>
    );
  }
}
export default App;
