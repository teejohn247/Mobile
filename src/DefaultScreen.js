import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class DefaultScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          images: [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree", // Network image
          ]
        };
      }
 render() {
   return (
     <ScrollView >
         <SliderBox 
         images={this.state.images}
         dotColor="#FFEE58"
         inactiveDotColor="#90A4AE"
         paginationBoxVerticalPadding={20}
         autoplay
         circleLoop
         resizeMethod={'resize'}
         resizeMode={'cover'}
         paginationBoxStyle={{
           position: "absolute",
           bottom: 0,
           padding: 0,
           alignItems: "center",
           alignSelf: "center",
           justifyContent: "center",
           paddingVertical: 10
         }}
         dotStyle={{
           width: 10,
           height: 10,
           borderRadius: 5,
           marginHorizontal: 0,
           padding: 0,
           margin: 0,
           backgroundColor: "rgba(128, 128, 128, 0.92)"
         }}
         ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
         imageLoadingColor="#2196F3"
          />

       <Text style={styles.welcome}>Welcome to React Native!</Text>
       <Text style={styles.instructions}>To get started, edit App.js</Text>
       <Text style={styles.instructions}>Okay</Text>
     </ScrollView>
   );
 }
}

const styles = StyleSheet.create({
 container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
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
});