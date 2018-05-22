//Import libraries for making Component
import React, { Component } from 'react';
import {Text,  StyleSheet,View} from 'react-native';

//make a Component


const Header=(props)=>(
  <View style={styles.viewStyle}>
       <Text style={styles.textStyle}>{props.headerText}</Text>
       </View>
    );

export default Header;

const styles = StyleSheet.create({
    textStyle: {
      fontSize:20
      },
      viewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        height:60,
        paddingTop:15,
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'

      }
  });

// Make the componets available to other parts of the application
