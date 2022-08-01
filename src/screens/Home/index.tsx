import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { pokeApi } from '../../Api'

import Pokedex from '../../components/Pokedex'
import Buttons from '../../components/Buttons'
import PokemonSearchInput from '../../components/PokemonSearchInput'

interface IPokemon {
  name: string
  id: string 
  gif: string
}


export default function Home() {

  const [pokemon, setPokemon] = useState<IPokemon | null>(null)
  const [pokemonId, setPokemonId] = useState(1)
  console.log('data-> ', pokemon)

  const handleNext = () => {
    let search = pokemonId + 1 
    setPokemonId(prevId => prevId+1)
    getPokemonData(search)
  }
  const handlePrevious = () => {
    let search = pokemonId - 1
    setPokemonId(prevId => prevId-1)
    getPokemonData(search)
  }

  const getPokemonData = async (search: string | number = 1) => {
    try {
      const { data } = await pokeApi.get(`/${search}`)
      let pokemonData = {  
        name: data.name,
        id: data.id,
        gif: data.sprites.versions['generation-v']['black-white']['animated']
        ['front_default']
      }
      setPokemon(pokemonData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemonData()
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokedex React Native</Text>
      {pokemon && 
        <Pokedex 
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          gif={pokemon.gif}
          name={pokemon.name}
          id={pokemon.id}
      />
      }
    </View>
  )
}
