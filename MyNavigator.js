import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack"
// import { Ionicons } from '@expo/vector-icons';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Header =({name, openDrawer})=> (
    <View style={styles.header}>
      <TouchableOpacity onPress={()=>openDrawer()}>
        <Ionicons name="ios-menu" size={32} />
      </TouchableOpacity>
      <Text>{name}</Text>
      <Text style={{width:50}}></Text>
    </View>
  )
  const Home = ({navigation}) => (
    <View style={styles.container}>
      <Header name="Home" openDrawer={navigation.openDrawer}/>
      <Image source ={require("./assets/banner.png")} style={{width:"80%", height:"30%"}} resizeMode="contain"/>
      <Text style={{padding:20}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dictum sapien, nec viverra orci. Morbi sed maximus purus. Phasellus quis justo mi. Nunc ut tellus lectus. 
      </Text>
      <Text style={{padding:20}}>
      In eleifend, turpis sit amet suscipit tincidunt, felis ex tempor tellus, at commodo nunc massa rhoncus dui. Vestibulum at malesuada elit.
      </Text>
  
    </View>
  )
  
  const Profile = ({navigation}) => (
    <View style={styles.container}>
      <Header name="Profile" onPress={() => navigation.goBack()}/>
      <Image source ={require("./assets/banner.png")} style={{width:"80%", height:"30%"}} resizeMode="contain"/>
      <Text style={{padding:20}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dictum sapien, nec viverra orci. Morbi sed maximus purus. Phasellus quis justo mi. Nunc ut tellus lectus. 
      </Text>
      <Text style={{padding:20}}>
      In eleifend, turpis sit amet suscipit tincidunt, felis ex tempor tellus, at commodo nunc massa rhoncus dui. Vestibulum at malesuada elit.
      </Text>
    </View>
  )
  
  const Settings = ({navigation}) => (
    <View style={styles.container}>
      <Header name="Settings" openDrawer={navigation.openDrawer}/>
      <Image source ={require("./assets/banner.png")} style={{width:"80%", height:"30%"}} resizeMode="contain"/>
      <Text style={{padding:20}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dictum sapien, nec viverra orci. Morbi sed maximus purus. Phasellus quis justo mi. Nunc ut tellus lectus. 
      </Text>
      <Text style={{padding:20}}>
      In eleifend, turpis sit amet suscipit tincidunt, felis ex tempor tellus, at commodo nunc massa rhoncus dui. Vestibulum at malesuada elit.
      </Text>
    </View>
  )
  
  
  const Tabs = createBottomTabNavigator(
    {
      Home: {
        screen: Home,
      },
      Profile: {
        screen: Profile,
      },
      Settings: {
        screen: Settings,
      },
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = 'ios-home';
          } else if (routeName === 'Profile') {
            iconName = 'ios-chatboxes';
          } else if (routeName === 'Settings') {
            iconName = 'ios-settings';
          }
          return (
            <Ionicons
              name={iconName}
              size={horizontal ? 20 : 25}
              color={tintColor}
            />
          );
        },
      }),
    },
  );
export default createAppContainer(Tabs);

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      paddingTop:40,
      alignItems:"center",
      flex:1
  
    },
    listItem:{
        height:60,
        alignItems:"center",
        flexDirection:"row",
    },
    title:{
        fontSize:18,
        marginLeft:20
    },
    header:{
      width:"100%",
      // height:60,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      paddingHorizontal:20,
      // marginTop:-10
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
  