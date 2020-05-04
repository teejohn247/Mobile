import React from 'react';
import {
 createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import BlueScreen from './BlueScreen';
import DefaultScreen from './DefaultScreen';
import BottomTabs from './BottomTabs';
import Ionicons from 'react-native-vector-icons/Ionicons';




const HamburgerNavigation = createDrawerNavigator(
    {
        Tabs: BottomTabs,
    },
    {
        initialRouteName: 'Tabs',
        contentComponent: props => {
            return (
                <View style={styles.container}>
                <View style={styles.sidebarDivider}></View>
                    <TouchableOpacity style={styles.listItem} onPress={() => {
                        props.navigation.navigate('BlueScreen');
                        props.navigation.closeDrawer();
                        }}>
                 <Ionicons name={"ios-home"} size={32} />
                 <Text style={styles.title}>Home</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.listItem} onPress={() => {
                        props.navigation.navigate('DefaultScreen');
                        props.navigation.closeDrawer();
                        }}>
                <Ionicons name={"ios-contact"} size={32} />
                <Text style={styles.title}>Home</Text>
               </TouchableOpacity>
                <TouchableOpacity style={styles.listItem} onPress={() => {
                        props.navigation.navigate('BlueScreen');
                        props.navigation.closeDrawer();
                        }}>
                <Ionicons name={"ios-settings"} size={32} />
                <Text style={styles.title}>Home</Text>
                </TouchableOpacity>

                </View>
            )
        }
    }
 );

 const Stack = createStackNavigator(
    {
        Drawer: {
            screen: HamburgerNavigation,
            navigationOptions: {
                header: null,
            },
            
        },
        BlueScreen:{
            screen: BlueScreen,
            navigationOptions: {
                title:'Blue',
            },
        },
        DefaultScreen: {
            screen: DefaultScreen,
            navigationOptions: {
                title:'DefaultScreen',
            },
        }
    }
 );


export default createAppContainer(Stack);
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      paddingTop:40,
      marginTop:30,
      marginLeft:10,
      flex:1
  
    },
    listItem:{
        height:60,
        
        flexDirection:"row",
    },
    title:{
        fontSize:18,
        marginLeft:20
    },
    profileImg:{
      width:80,
      height:80,
      borderRadius:40,
      marginTop:20
    },
    sidebarDivider:{
      height:1,
      width:"100%",
      backgroundColor:"lightgray",
      marginVertical:10
    }
  });
  



















//   const HamburgerNavigation = createDrawerNavigator(
//     {
//         Tabs: BottomTabs,
//     },
//     {
//         initialRouteName: 'Tabs',
//         contentComponent: props => {
//             return (
//                 <View style={styles.container}>
//                 {/* //     <SafeAreaView */}
//                 //     // forceInset={{ top: 'always', horizontal: 'never' }}
//                 // >
//                     {/* // <Menu /> */}

//                     <TouchableOpacity style={styles.listItem} onPress={() => {
//                         props.navigation.navigate('BlueScreen');
//                         props.navigation.closeDrawer();
//                         }}>
//       <Ionicons name={"ios-home"} size={32} />
//       <Text style={styles.title}>Home</Text>
//     </TouchableOpacity>
//                     // {/* <TouchableOpacity >
//                     // <Text style={{fontSize:16,marginTop:10}}
//                         // onPress={() => {
//                         // props.navigation.navigate('BlueScreen');
//                         // props.navigation.closeDrawer();
//                         // }}
//                     // >
//                     //     BlueScreen
//                     // </Text>
//                     // </TouchableOpacity>
//                     // <TouchableOpacity >

//                     // <Text style={{fontSize:16,marginTop:10}}
//                         // onPress={() => {
//                         // props.navigation.navigate('DefaultScreen');
//                         // props.navigation.closeDrawer();
//                         // }}
//                     // >
//                     //     DefaultScreen
//                     // </Text>

               
//                     // </TouchableOpacity > */}
//                 {/* //     </SafeAreaView> */}
//                 </View>
//             )
//         }
//     }
//  );