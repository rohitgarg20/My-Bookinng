import React,  { Component,  } from 'react'
import { View, Text, AppRegistry  } from 'react-native'
import { connect, Provider } from 'react-redux'
import { Loader } from './components/Loader'
import { routergenrator } from './navigator'
import { SplashScreen } from './screens/Splash/SplashScreen'
import { store } from './store'

interface IProps {
  currentStackName?: string
  rootRouter?: any
  routerGenerator?: any
}

export class App extends Component<IProps> {

  componentDidMount(){
    const { routerGenerator } = this.props
    routerGenerator()
  }

  renderSplashScreen = () => {
    return(
      <View>
        <Text></Text>
      </View>
    )
  }

  render(){
    const { rootRouter: RootRouter } = this.props
    return (
      <>
      {
        RootRouter ? <RootRouter/> : (
          <SplashScreen/>
        )
      }
        <Loader/>
      </>
    )
  }

}


const mapStateToProps = (state) => {
  const { navigationReducer = {} } = state;
  return {
    currentStackName: navigationReducer.currentStackName,
    rootRouter: navigationReducer.router
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    routerGenerator: () => routergenrator(dispatch)
  }
}

const AppWithConnect = connect(mapStateToProps, mapDispatchToProp)(App);


const AppwithStore = () => {
  return (
    <Provider store={store}>
        <AppWithConnect />
    </Provider>
  )
}




AppRegistry.registerComponent('MyProject', () => {
  return (
    AppwithStore
  )
})