import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Password from './password'

const Register = ({ navigation}) => {
 

 

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Register</Text>
       <Password placeholder="Nama"/>
        <Password placeholder="Username"/>
         <Password placeholder="Email"/>
          <Password placeholder="Password"/>
      <Password placeholder=" Confirm Password"/>

       <TouchableOpacity style={styles.buttonContainer}
        onPress={() => navigation.navigate('home')}
      >
      <Text>Masuk</Text>
      </TouchableOpacity>
       <Text style={{marginTop: 20,fontWeight: 600,}}>Have an Account ? 
         <TouchableOpacity  onPress={() => navigation.navigate('login')} style={{marginTop: 40, paddingTop: 8, alignContent: 'center',justifyContent: 'center', alignItems: 'center',}}><Text style={{fontWeight: 500, color: '#39A7FF'}}>Login</Text></TouchableOpacity>
      </Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  label: {
    fontSize: 35,
    marginBottom: 5,
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

export default Register;
