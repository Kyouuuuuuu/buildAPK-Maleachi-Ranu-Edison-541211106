import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,Image, SafeAreaView} from 'react-native';
import Password from './password'
import welcome from '../assets/welcome.png'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
const Register = ({ navigation}) => {
 

 

  return (
    <SafeAreaView style={styles.container}>
    <View>
     <Image source={welcome} style={{width: 150, height: 170, top: 220, left :100}}/>
       <Text style={styles.label}>Welcome</Text>
      <Text style={{fontWeight: 800, fontSize: 30, color: 'grey', top: 220, left: 50,}}>To Our Application</Text>
     
    </View>
     <View style={{borderWidth: 3, borderColor: '#F5F5F5', borderRadius: 8, height: 70,backgroundColor: '#F0F0F0',marginTop: 250,elevation: 10, position: 'relative', width: 150, marginLeft: 100}}>
     <Text style={{fontWeight: 600, marginLeft: 30, fontSize: 25, marginTop: 15}}>Start</Text>
       <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <View style={{ position: 'absolute', right: 10, top: -40 }}>
              <MaterialIcons name="navigate-next" size={50} color="black" />
            </View>
          </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: 'white'
  },
  label: {
    fontSize: 25,
    marginBottom: 5,
    fontWeight: 800,
    top: 220,
    left: 120,
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
