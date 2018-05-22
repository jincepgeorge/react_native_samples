//Import libraries for making Component
import React, { Component } from 'react';
import {Text,  StyleSheet,View} from 'react-native';
import axios from 'axios';

//make a Component
class AlbumList extends Component{
  componentWillMount(){
    console.log('componet will mount');
    axios.get('https://rallycoding.herokuapp.com/api/music_album')
    .then(response=>console.log(response));
  }
  render(){
    return (
      <View>
           <Text>Album List</Text>
      </View>
    );
  };
};

export default AlbumList;
