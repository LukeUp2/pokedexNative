import { StyleSheet, Dimensions } from 'react-native'
import { Oxanium_400Regular } from '@expo-google-fonts/oxanium'
import { theme } from '../../GlobalStyles/theme'
const heigth = Dimensions.get("window").height


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: heigth/50,
    position: 'relative',
  },
  title: {
    fontSize: 25,
    color: '#000',
    marginBottom: 15,
    fontFamily: theme.fontFamilyBold
  },
  pokemonGif: {
    width: 90,
    height: 90,
    position: 'absolute',
    zIndex: 99,
    top: 12
  }
})
