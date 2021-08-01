import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
})

export class SplashScreen extends Component {
  render() {
    return (
      <View style ={styles.mainContainer}>
        <Text style = {styles.text}> Booking App </Text>
      </View>
    )
  }
}
