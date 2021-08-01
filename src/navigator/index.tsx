import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import { signUpLoginStack } from './Stacks/SignUpLoginStack';
import { connect } from 'react-redux';
import { getUserLoggedInStatus } from '../app-utils/AppUtils';
import { setCurrentStackName, setRouterState } from '../service/navigation/NavigationService';
import { bottomTabBarStack } from './Stacks/BottomTabBarStack';



function rootStack(props){
  const Stack = createStackNavigator()
  const { currentStackName } = props

  return (

  <NavigationContainer>
    <Stack.Navigator screenOptions = {{ headerShown: false }}>
        {currentStackName === 'SignupLogin' && <Stack.Screen name = {'SignupLogin'} component = {signUpLoginStack}/>}
        {currentStackName === 'homeStack' && <Stack.Screen name = {'homeStack'} component = {bottomTabBarStack}/>}
    </Stack.Navigator>
  </NavigationContainer>
  )
}



const mapStateToProps = (state) => {
  const { navigationReducer = {} } = state;
  return {
    currentStackName: navigationReducer.currentStackName
  };
};

const rootMainStack = connect(mapStateToProps)(rootStack)

export function routergenrator(dispatch) {
  getUserLoggedInStatus().then(async isLoggedIn => {
      const initialRoute = isLoggedIn ? 'homeStack' : 'SignupLogin'
      setCurrentStackName(dispatch, initialRoute)
      setRouterState(dispatch, rootMainStack)
  })
}

export {
  rootMainStack as RootMainStack
}