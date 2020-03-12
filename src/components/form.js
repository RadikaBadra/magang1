import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
class Form extends Component{
    render(){
       return(
           <>
            <View style ={styles.containers}>
                <TextInput style={styles.TextBox} 
                    underlineColorAndroid='black' placeholder="E-mail"
                    placeholderTextColor='#a6a6a6'/>
                <TextInput style={styles.TextBox} 
                    secureTextEntry={true}
                    underlineColorAndroid='black' placeholder="Password"
                    placeholderTextColor='#a6a6a6'/>
                <TouchableOpacity>
                    <Text style={styles.forgottext}>forgot password</Text>
                </TouchableOpacity>    
                <TouchableOpacity style={styles.button}>
                    <Text style = {styles.buttontext}>LOGIN</Text>
                </TouchableOpacity>
            </View>
           </>
       )
    }
}
const styles = StyleSheet.create({
    containers: {
      flexGrow: 1,
      alignItems:'flex-end',
      justifyContent : 'center',
    },
    TextBox:{
        width:300,
        borderRadius: 25,
        color:'black',
        fontSize:15,
        paddingHorizontal: 20,
        marginVertical:10,
    },
    buttontext:{
        fontSize : 16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center',
    },
    button:{
        backgroundColor:'#492983',
        width:150,
        borderRadius:25,
        marginVertical:50,
        paddingVertical:10,
        
    },
  });
export default Form;
