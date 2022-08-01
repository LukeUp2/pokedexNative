import { StatusBar } from 'expo-status-bar';
import { useFonts, Oxanium_400Regular, Oxanium_700Bold } from '@expo-google-fonts/oxanium'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Home from './src/screens/Home';

export default function App() {

  const [fontsLoaded, error] = useFonts({
    Oxanium_400Regular,
    Oxanium_700Bold
  })

  return (
    <>
      <StatusBar style="auto" translucent/>
      {fontsLoaded? 
        <Home /> : <ActivityIndicator size="large" color="#fff"/>
      }
    </>
  );
}