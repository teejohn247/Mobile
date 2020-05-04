import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HamburgerIcon from './HamburgerIcon';
import { Container, Tab, Tabs, StyleProvider } from 'native-base';



export default class Tab2 extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Text style={styles.instructions}>Okay</Text>
          </View>
        );
      }



//     static navigationOptions = () => {
//         return {
//             headerLeft: <HamburgerIcon/>
//         };
//     };
//     render() {
//         return (
//             <Container>
//                 <Tabs>
//                     <Tab
//                     heading='Green Tab'>
//                         <View style={styles.container}>
//                             <Text style={styles.title}>Green Screen</Text>
//                         </View>
//                     </Tab>
//                     <Tab heading='Tab 2'>
//                     <Text style={styles.title}>Green Screen</Text>
//                     </Tab>
//                     <Tab heading='Tab 3'>
//                     <Text style={styles.title}>Green Screen</Text>
//                     </Tab>
//                 </Tabs>
//             </Container>
//         );
//     }
 }
//   const styles = StyleSheet.create({
//     container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'green',
//     },
//     title: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     }
//  });

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
   });