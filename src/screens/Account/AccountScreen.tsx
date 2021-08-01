import React, { Component } from 'react'
import { Alert, TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { userSignout } from '../../app-utils/AppUtils'
import { logoutUser } from '../../store/action/Account/ActionCreator'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white'
  },
  textContent: {
    fontSize: 20,
    color: '#999999'
  },
  buttonSection: {
    borderBottomWidth: 1,
    borderColor: '#333',
    padding: 20
  },
  headerSection: {
    borderBottomWidth: 1,
    borderColor: 'orange',
    backgroundColor: 'orange',
    padding: 20,
  }
})

interface IProps {
  logoutUser?: () => void
}

export class accountScreen extends Component<IProps> {

  onPressLogoutButton = () => {
    const { logoutUser } = this.props
      Alert.alert(
        'Logout',
        'Are you sure you want to logout ?',
        [
          { text: 'Cancel' },
          { text: 'Yes', onPress: () => logoutUser() }
        ],
        { cancelable: false }
      )
  }

  renderLogoutButton = () => {
    return(
      <TouchableOpacity style = {styles.buttonSection} onPress = {this.onPressLogoutButton}>
        <Text>Logout</Text>
      </TouchableOpacity>
    )
  }

  renderheader = () => {
    return (
      <View style = {styles.headerSection}>
        <Text style = {{
          color: 'white'
        }}>PROFILE</Text>
      </View>
    )
  }
  render() {
    return (
      <View style = {styles.mainContainer}>
        {this.renderheader()}
        {this.renderLogoutButton()}
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}

const AccountScreen  = connect(null, mapDispatchToProps)(accountScreen)

export {
  AccountScreen
}
