/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Nav = require('./Navigation');

var TestLayout = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Nav />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('TestLayout', () => TestLayout);
