import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Logo from '../components/logo';
import Form from '../components/form';

class Login extends Component{
    render(){
       return(
           <>
            <View style = {styles.containers}>
                <Logo/>
                <Form/>
                <View style={styles.textsignup}>
                  <Text style={styles.signup}>Don't have an account?</Text>
                  <TouchableOpacity>
                    <Text style={styles.signupbutton}>SIGN UP</Text>
                  </TouchableOpacity>
                </View>
            </View>
           </>
       )
    }
}
const styles = StyleSheet.create({
  containers: {
    backgroundColor: 'white',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textsignup:{
    justifyContent: 'center',
    flexGrow: 1.3,
    alignItems: 'flex-end',
    paddingVertical:16,
    flexDirection:'row',
  },
  signup:{
    color:'black',
    fontSize:14,
  },
  signupbutton:{
    color:'#492983',
    fontWeight:'bold',
    marginHorizontal:10,
    fontSize:16,
  }
});


export default Login;
