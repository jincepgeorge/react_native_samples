import React from 'react'
import {ReactNative,Text,AppRegistry,View} from 'react-native'
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
//Create Component

const App=()=>(
  <View>
      <Header headerText={'Albums!'}/>
      <AlbumList/>
      </View>
    );

AppRegistry.registerComponent('albums', () => App);
