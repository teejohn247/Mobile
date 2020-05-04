import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack";
import BlueScreen from './BlueScreen';
import DefaultScreen from './DefaultScreen';

function Item({ item, navigate }) {
    return (
      <TouchableOpacity style={styles.listItem} onPress={()=>navigate(item.name)}>
        <Ionicons name={item.icon} size={32} />
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

export default class menu extends Component {
    state = {
        routes:[
            {
                name:"BlueScreen",
                icon:"ios-home"
            },
            {
                name:"DefaultScreen",
                icon:"ios-contact"
            },
            {
                name:"Settings",
                icon:"ios-settings"
            },
        ]
    }
  
    render(){
        return (
            <View style={styles.container}>
                <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Janna Doe</Text>
                <Text style={{color:"gray",marginBottom:10}}>janna@doe.com</Text>
                <View style={styles.sidebarDivider}></View>
                <FlatList
                    style={{width:"100%",marginLeft:30}}
                    data={this.state.routes}
                    renderItem={({ item }) => <Item  item={item} navigate={this.props.navigation.navigate}/>}
                    keyExtractor={item => item.name}
                />
            </View>
        )
    }
}

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
  
