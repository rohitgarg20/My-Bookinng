import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backArrow: {
    height: 40,
    width: 40
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainContainer: {
    // flex: 1,
    height: '100%',
    padding: 20,
    backgroundColor: 'white'
  },
  backIconContainer: {
    position: 'absolute',
    left: 0
  },
  headingLabel: {
    fontSize: 18,
    color: '#666666'
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#eee'
  },
  signInButton: {
    backgroundColor: 'orange',
    borderWidth: 0,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    color: 'white'
  }
})

export {
  styles
}