import React, { Component } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

interface IProps {
  isLoading?: boolean

}

interface IState{
}

class loader extends Component< IProps, IState> {



  render() {
    const { isLoading } = this.props
    console.log('isLoadingisLoadingisLoading', isLoading)
    return (
      isLoading ? <View style = {styles.mainContainer}>
        <ActivityIndicator size = {'large'} color = {'#ccc'}/>
      </View> : null
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToPropsmapStateToProps', state, )
  const { loaderReducer = {} } = state
  console.log('mapStateToPropsmapStateToProps', loaderReducer, loaderReducer.isLoading )

   return {
     isLoading: loaderReducer.isLoading
   }
}

const Loader = connect(mapStateToProps, null)(loader)

export {
  Loader
}

