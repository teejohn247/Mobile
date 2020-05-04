import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Dimensions, Image } from 'react-native';

export default function FirstText() {
  return (
      <View>
        <Image source={require('../assets/flame.png')} style={styles.inner}/>
      </View>
  );
}

const styles = StyleSheet.create({
 
  inner:{
      marginTop:20,
      width:30,
  }
  
});

