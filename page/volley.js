import { Text, SafeAreaView, StyleSheet, View, ScrollView,TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

// You can import supported modules from npm
import { Card, Picker} from 'react-native-paper';
import volley from '../assets/volleyball.jpg'

// or any files within the Snack


const App =({navigation})=> {
  
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
     <View style={{marginTop: 70}}>
     <Text style={{fontFamily: 'Montserrat', fontWeight: 700, fontSize: 27, color: ''}}>Basketball</Text>
     <Text style={{fontWeight: 500, fontSize: 20, color: 'grey'}}>Pembimbing: Kiki</Text>
     </View>
     <View style={{marginTop: 20}}>
     <Text style={{fontWeight: 600, fontSize: 20}}>
     Dokumentasi:
     </Text>
     <Image source={volley} style={{width: 340, height: 200, borderRadius: 8 }}/>
     
     </View>
     <View style={{marginTop: 20,}}>
     <Text style={{fontWeight: 600, fontSize:20, color:'grey'}}>Deskripsi:</Text>
     <Text style={{fontWeight:500, fontSize:15,}}>Dibentuk pada tahun 2020 eskul ini memiliki solidaritas yang paling tinggi di antara eskul yang lain, pengalaman anggota eskul ini juga tidak main main, bahkan pernah menjuarai perlombaan tinkat internasional!</Text>
     
     </View>
     <View style={{justifyContent: 'center', textAlign: 'center', alignItems:'center',alignContent:'center', marginTop: 20,}}>
     <Text style={{textAlign:'center', fontWeight: 800, fontSize:20}}>VENI, VIDI, VICI!</Text>

     </View>
     <View style={{borderWidth: 3, borderColor: '#F5F5F5', borderRadius: 8, height: 100,backgroundColor: '#F0F0F0',marginTop: 20,elevation: 10, position: 'relative', }}>
     <Text style={{fontWeight: 600, marginLeft: 10, fontSize: 20, marginTop: 30}}>Bukti sudah mengirimkan tugas</Text>
    <TouchableOpacity onPress={() => navigation.navigate('tugasvolley')}>
            <View style={{ position: 'absolute', right: 5, top: -40 }}>
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