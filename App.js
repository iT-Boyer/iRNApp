/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
///导入图片控件
import {Platform, FlatList, Image, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//请求网络数据的路径
var REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
type Props = {};
export default class App extends Component<Props> {
  //构造器
  constructor(props){
    super(props);
    this.state = {
      data: [],
      loaded: false
    };
    this.fetchData = this.fetchData.bind(this);
  }
  //周期函数：组件加载后，请求网络数据
  componentDidMount(){
    this.fetchData();
  }
  //网络请求数据的方法
  fetchData(){
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ 
          data: this.state.data.concat(responseData.movies),
          loaded: true
        });
      });
  }

  //渲染UI数据
  render(){
    if(!this.state.loaded){ 
      return this.renderLoadingView();
    }
    return( 
      <FlatList 
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles.list}
      />
    )
  }
  //加载进度条
  renderLoadingView(){
    return( 
      <View style={styles.constructor}>
        <Text>Loading movies...</Text>
      </View>
    );
  } 
  //渲染电影的实现方法
  renderMovie({item}){
    return(
      <View style={styles.container}>
        <Image 
        source={{uri: item.posters.thumbnail}}
        style={styles.thumbnail}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.year}>{item.year}</Text>
      </View>
      </View>
    );
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    rightContainer:{
      flex:1
    },
  title:{
    fontSize:20,
      marginBottom:8,
      textAlign: "center"
  },
    year:{
      textAlign: "center"
    },
    list:{
  paddingTop:20,
        backgroundColor: "#F5FCFF"

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
