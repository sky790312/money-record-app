import React, { Component } from 'react';
// import { Text, Button } from 'react-native';
// import { AppWrapperStyledView } from './AppStyles';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/navigation';

const AppContainer = createAppContainer(AppNavigator);
// export default AppContainer
export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}
