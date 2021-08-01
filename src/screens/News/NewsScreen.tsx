import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textContent: {
    fontSize: 20,
    color: '#999999'
  }
})

export class NewsScreen extends Component {
  render() {
    return (
      <View style = {styles.mainContainer}>
        <Text style = {styles.textContent}>This Section is under development</Text>
      </View>
    )
  }
}
