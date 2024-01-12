import { Text, SafeAreaView, StyleSheet, View, Image,TextInput, Button, Alert, TouchableOpacity, Linking} from 'react-native';
import { Card } from 'react-native-paper';
// import AssetExample from './components/AssetExample';
// import profil from './Logo.png'


export default function LoginScreen({placeholder}) {
 return (
   <View style={Styles.container}>
    <TextInput style={Styles.username} placeholder={placeholder} placeholderTextColor="grey"  keyboardType="Text"/>
  
   </View> 
  );
}
const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  username:{
    padding: 8,
    borderColor: 'black',
    width: 300,
    height: 40,
    marginLeft: 10,
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'black', // You can customize the color
    borderRadius: 8,
  },

});
