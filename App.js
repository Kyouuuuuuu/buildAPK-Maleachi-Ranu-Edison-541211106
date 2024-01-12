import { Text, SafeAreaView, TouchableOpacity, StyleSheet, View, Image, Button, Alert, ScrollView, StatusBar, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import welcome from './page/start'
import login from './page/login';
import register from './page/register';
import home from './page/home';
import basket from './page/basket';
import daftarbasket from './page/crudbasket';
import volley from './page/volley';
import tugasvolley from './page/crudvolley'


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="welcome" component={welcome} />
    <Stack.Screen name="login" component={login} />
     <Stack.Screen name="register" component={register} />
      <Stack.Screen name="home" component={home} />
      <Stack.Screen name="basket" component={basket} />
       <Stack.Screen name="daftarbasket" component={daftarbasket} />
       <Stack.Screen name="volley" component={volley} />
       <Stack.Screen name="tugasvolley" component={tugasvolley} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}