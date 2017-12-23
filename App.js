/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  //Action click
  clickMe() {
    console.log('Button clicked!');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{this.clickMe()}} style={styles.success}>
          <View>
            <Text style={styles.btn_text}>Success</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.clickMe()}} style={styles.warning}>
          <View>
            <Text style={styles.btn_text}>Warning</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.clickMe()}} style={styles.danger}>
          <View>
            <Text style={styles.btn_text}>Danger</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  btn_text:{
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  success:{
    backgroundColor:"#28a745",
    justifyContent: 'center',
    flex: 1,
    marginBottom: 20,
    marginTop: 20,
  },
  warning:{
    backgroundColor:"#ffc107",
    justifyContent: 'center',
    flex: 1,
    marginBottom: 20,
    marginTop: 20,
  },
  danger:{
    backgroundColor:"#dc3545",
    justifyContent: 'center',
    flex: 1,
    marginBottom: 20,
    marginTop: 20,
  }
});
