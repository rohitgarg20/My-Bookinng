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
  },
  errorMsg: {
    color: 'red',
    fontSize: 16
  },
  fbButton: {
    marginTop: 20,

    backgroundColor: 'blue',
    borderWidth: 0,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabBarContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  tabBarItemStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  normalImageStyle : {
    alignSelf: 'center',
    height: 30,
    width: 30
  },
})

export {
  styles
}