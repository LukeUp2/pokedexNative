import React from 'react'
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'
import { theme } from '../../GlobalStyles/theme'
import Buttons from '../Buttons'

type Props = {
  gif: string
  name: string
  id: string
  handleNext: () => void
  handlePrevious: () => void
}

export default function Pokedex( pokemon : Props) {
  return (
    <View style={styles.container}>
      {pokemon.gif?
        <>
          <Image 
            source={{ uri: pokemon.gif }}
            style={styles.pokemonGif}
            resizeMode="contain"
          />
          <View style={styles.infoContainer}>
            <Text style={styles.id}> {pokemon.id} - </Text>
            <Text style={styles.name}> {pokemon.name} </Text>
          </View>
        </>
        :
        <ActivityIndicator size="large" color="#000"/>
      }
      <Image 
        source={require('../../assets/pokedex.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Buttons handleNext={pokemon.handleNext} handlePrevious={pokemon.handlePrevious}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  infoContainer: {
    position: 'absolute',
    top: 275,
    zIndex: 90,
    flexDirection: 'row'
  },
  id: {
    fontSize: 23,
    color: '#424242',
    fontFamily: theme.fontFamilyRegular
  },
  name: {
    fontSize: 23,
    fontFamily: theme.fontFamilyBold,
    textTransform: "capitalize"
  },
  image: {
    width: 350,
    height: 500
  },
  pokemonGif: {
    position: 'absolute',
    zIndex: 99,
    width: 80,
    height: 80,
    bottom: 255
  }
})
