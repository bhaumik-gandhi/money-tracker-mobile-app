import * as React from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import store from './src/Store';
import Router from './src/Navigation';

export default class App extends React.Component<{}> {
  render() {
    const { container } = styles;

    return (
      <Provider store={ store }>
        <View style={ container }>
          <Router />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});