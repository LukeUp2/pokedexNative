import { StyleSheet } from 'react-native'
import { theme } from '../../GlobalStyles/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 90,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    top: 195,
    right: 15,
    marginHorizontal: 20
  },
  button: {
    backgroundColor: '#444',
    borderRadius: 5,
    borderColor: '#000',
    width: 100,
    alignItems: 'center',
    paddingHorizontal: 2,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5
  },
  title: {
    fontSize: 19,
    color: '#fff',
    fontFamily: theme.fontFamilyRegular
  }
})
