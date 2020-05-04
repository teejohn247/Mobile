import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions,
     TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback,
     SafeAreaView, Keyboard} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
// import { Hideo } from 'react-native-textinput-effects';
import { Input } from 'react-native-elements';
import { Radio } from 'native-base';


export default function SignUpForm() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <SafeAreaView>
    <View style={styles.container}>
   
        <Input inputContainerStyle={{borderBottomWidth:0}} placeholder="Username" placeholderTextColor = "#999999"
      containerStyle = {styles.campusInputContainer} style={{fontSize: 2}}
         leftIcon={
            <Icon
              name='person'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
            />
            
          } />
        <Input placeholder="Email"  
        inputContainerStyle={{borderBottomWidth:0}} placeholderTextColor = "#999999"
        containerStyle = {styles.campusInputContainer} 
         leftIcon={
            <Icon
              name='mail'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
              /> 
         
               }  />
         <Input placeholder="Phone Number" 
        inputContainerStyle={{borderBottomWidth:0}} placeholderTextColor = "#999999"
        containerStyle = {styles.campusInputContainer} 
         leftIcon={
            <Icon
              name='phone'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
              /> 
         
               }  />
         <Input placeholder="Password" secureTextEntry={true} 
        inputContainerStyle={{borderBottomWidth:0}} placeholderTextColor = "#999999"
        containerStyle = {styles.campusInputContainer} 
         leftIcon={
            <Icon
              name='lock'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
              /> 
         
               }  />
               {/* <View style={{flexDirection:'row'}}>
               <Radio
                color={'#999999'}
                selectedColor={'#fff'}
              />
              <Text>User</Text>
              <Radio
                color={'#999999'}
                selectedColor={'#fff'}
              />
              <Text>Vendor</Text>

               </View> */}
               
        <TouchableOpacity style={styles.button}>

            <Text style={styles.buttontext}>Register</Text>
        </TouchableOpacity>
        <Text style={{color:'#fff', marginLeft:'60%',}}>Forgot Password?</Text>

    </View>
    </SafeAreaView>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding:20,
    margin:20
  },
  input:{
    //   width: Dimensions.get('window').width - 70,
    //   height: 40,
    paddingVertical:5,
      backgroundColor: 'rgba(255,255,255, 0.8)',
      marginBottom:10,
      paddingLeft:10,
      borderColor:'black',
      borderRadius:30, 
      elevation:3
  },
  campusInputContainer: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    // alignItems: 'stretch',
    paddingHorizontal:5,
    borderRadius:30,
    shadowColor: 'black',
      shadowOpacity:0.26,
      shadowOffset:{width:0,height:2},
      shadowRadius:8,
      elevation:3,
      marginBottom:10
  },
  button:{
      backgroundColor: '#3379EC',
      paddingVertical:10,
      width: Dimensions.get('window').width - 75,
      paddingLeft:10,
      borderRadius:30 ,
      marginBottom:10,
      marginVertical:5,
      shadowColor: 'black',
      shadowOpacity:0.26,
      shadowOffset:{width:0,height:2},
      shadowRadius:8,
      elevation:3

  },
  buttontext:{
      color:'white',
      textAlign:'center'
  }

});

