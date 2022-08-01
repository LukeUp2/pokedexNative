import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

type Props = {
  handlePrevious: () => void
  handleNext: () => void
}

export default function Buttons({ handlePrevious, handleNext }: Props) {
  return (
      <View style={styles.container}>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePrevious}>
            <Text style={styles.title}>
              {`< Previous`}
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.title}>
              {`Next >`}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
  )
}
