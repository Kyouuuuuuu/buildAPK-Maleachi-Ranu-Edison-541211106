import { Text, SafeAreaView, StyleSheet, View, ScrollView,TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// You can import supported modules from npm
import { Card, Picker} from 'react-native-paper';

// or any files within the Snack


const App =({navigation})=> {
  
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
     <View style={{marginTop: 70}}>
     <Text style={{fontFamily: 'Montserrat', fontWeight: 700, fontSize: 20, color: ''}}>Halo,Paijo!</Text>
     <Text style={{fontWeight: 500, fontSize: 25, color: 'grey'}}>Welcome Back</Text>
     </View>
      <View style={{borderWidth: 3, borderColor: '#F5F5F5', borderRadius: 8, height: 200,backgroundColor: 'black',marginTop: 20,elevation: 10, position: 'relative', }}>
      <Entypo name="calendar"style={{marginLeft: 10, marginTop:10,}} size={24} color="white" />
     <Text style={{fontWeight: 600, marginLeft: 10, fontSize: 15, marginTop: 18, color: 'white'}}>Senin, 27 November 2023</Text>
     <Text style={{color: 'white', fontWeight:800, fontSize:20,textAlign: 'center', marginTop: 10,}}>"Jangan biarkan ukuran mimpi Anda dibatasi oleh kenyataan. Sebaliknya, biarkan mimpi Anda menentukan kenyataan."</Text>
     
     </View>
     <View style={{marginTop: 20}}>
     <Text style={{fontWeight: 600, fontSize: 18, color:'grey', marginLeft: 10}}>
     Manage Your Ekstrakurikuler Here!
     </Text>
     </View>
     <View style={{borderWidth: 3, borderColor: '#F5F5F5', borderRadius: 8, height: 100,backgroundColor: '#F0F0F0',marginTop: 20,elevation: 10, position: 'relative', }}>
     <Text style={{fontWeight: 600, marginLeft: 30, fontSize: 25, marginTop: 30}}>Basketball</Text>
       <TouchableOpacity onPress={() => navigation.navigate('basket')}>
            <View style={{ position: 'absolute', right: 10, top: -45 }}>
              <MaterialIcons name="navigate-next" size={50} color="black" />
            </View>
          </TouchableOpacity>
     </View>
     <View style={{borderWidth: 3, borderColor: '#F5F5F5', borderRadius: 8, height: 100,backgroundColor: '#F0F0F0',marginTop: 20,elevation: 10, position: 'relative', }}>
     <Text style={{fontWeight: 600, marginLeft: 30, fontSize: 25, marginTop: 30}}>Voleyball</Text>
       <TouchableOpacity onPress={() => navigation.navigate('volley')}>
            <View style={{ position: 'absolute', right: 10, top: -45 }}>
              <MaterialIcons name="navigate-next" size={50} color="black" />
            </View>
          </TouchableOpacity>
     </View>
     
   
     
     </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
 
export default App;