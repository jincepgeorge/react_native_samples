//Import libraries for making Component
import React, { Component } from 'react';
import {Text,  StyleSheet,View} from 'react-native';

//make a Component
class AlbumList extends Component{
  componentWillMount(){
    console.log('componet will mount');
  }
  render(){
    return (
      <View>
           <Text>Album List!!</Text>
      </View>
    );
  };
};

export default AlbumList;
