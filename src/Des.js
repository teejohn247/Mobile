import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

export default class Des extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
        <Svg height={300} >
                <Svg.Path
                  d="M-17.5 378.5C31.5 32.5 302.5 463 375 89C447.5 -285 375 644 375 644H0C0 644 -66.5 724.5 -17.5 378.5Z" // put your path here
                  fill="blue"
                  stroke="blue"
                />  
              </Svg>
      </View>
    );
  }
}


// import React, {Component} from 'react';
// import { Text, View, StyleSheet, Dimensions, TextInput } from 'react-native';
// import Expo from 'expo';
// import Svg from 'react-native-svg';

// const WIDTH = Dimensions.get('screen').width;

//     export default class Des extends Component {
//         render() {
//           return (
//             <View style={styles.container}>
              // <Svg height={300} >
              //   <Svg.Path
              //     d="M-17.5 378.5C31.5 32.5 302.5 463 375 89C447.5 -285 375 644 375 644H0C0 644 -66.5 724.5 -17.5 378.5Z" // put your path here
              //     fill="blue"
              //     stroke="blue"
              //   />  
              // </Svg>
//               <View style={{backgroundColor: 'blue', flex: 1}}>
//                 <View style={{width: WIDTH - 60, height: 60, backgroundColor:'white', borderRadius: 30, margin: 30, justifyContent: 'center', paddingLeft: 10}}>
//                     <TextInput
//                       placeholder='email'
//                     />
//                 </View>
//               </View>
//             </View>
//           );
//         }
//       }

// const styles = StyleSheet.create({
//     container: {
//     //   backgroundColor: "#fff",
//     //   paddingTop:40,
//     //   alignItems:"center",
//       flex:1
//     }
// })
