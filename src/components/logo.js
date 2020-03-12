import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
class Logo extends Component{
    render(){
       return(
           <>
            <View style ={styles.containers}>
                <Image source={require('../images/behance.png')}
                 style ={{width:450,height:150}}/>
            </View>
           </>
       )
    }
}
const styles = StyleSheet.create({
    containers: {
      flexGrow: 1,
      alignItems : 'center',
      justifyContent : 'flex-end',
    },
  });
export default Logo;
