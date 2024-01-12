import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Password from './password'
import profil from '../assets/person.png'
import profil2 from '../assets/person2.png'

const Login = ({ navigation}) => {
 

 

  return (
    
    <View style={styles.container}>
    <Image source={profil} style={{width: 118, height: 170, left: 100,top:270}}/>
    <Image source={profil2} style={{width: 110, height: 170,left:-110, top: -50}}/>
      <Text style={styles.label}>Login</Text>
       <Password placeholder="username"/>
      <Password placeholder="Password"/>

       <TouchableOpacity style={styles.buttonContainer}
        onPress={() => navigation.navigate('home')}
      >
      <Text>Masuk</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 20,fontWeight: 600,}}>Don't Have an Account ? 
         <TouchableOpacity  onPress={() => navigation.navigate('register')} style={{marginTop: 40, paddingTop: 8, alignContent: 'center',justifyContent: 'center', alignItems: 'center',}}><Text style={{fontWeight: 500, color: '#39A7FF'}}>Register</Text></TouchableOpacity>
      </Text>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  label: {
    fontSize: 35,
    marginBottom: 5,
    marginTop: -40,
    fontWeight: 600,

  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white'

  },
    buttonContainer: {
     borderWidth: 2,
     width: 90,
     height: 40,
     borderRadius: 5,
     marginTop: 20,
     backgroundColor: '#91C8E4',
     justifyContent: 'center', 
     alignItems: 'center',
     
  
  },
});

export default Login;
