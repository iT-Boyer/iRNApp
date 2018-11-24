/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
///导入图片控件
import {Platform, Image, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var MOCKED_MOVIES_DATA = [{
  title:"标题",
  year:"2015",
  posters:{thumbnail:"https://i.imgur.com/UePbdph.jpg"}
}];
type Props = {};
export default class App extends Component<Props> {
  render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>第一个APP 完成!</Text>
        <Text style={styles.instructions}>编辑 App.js 更新UI</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
        <Text>{movie.posters.thumbnail }</Text>
        <Image source = {{ uri: movie.posters.thumbnail }} style={styles.thumbnail}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  thumbnail:{
    width: 53,
    height: 81
  },
});
