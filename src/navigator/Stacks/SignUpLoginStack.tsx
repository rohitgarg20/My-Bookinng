import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from '../../screens/SignUpLoginScreen/SignupScreen';
import LoginScreen from '../../screens/SignUpLoginScreen/LoginScreen';


const Stack = createStackNavigator()

const signUpLoginStack = () => {
  return (
    <Stack.Navigator screenOptions = {{ headerShown: false }} initialRouteName = {'Login'}>
      <Stack.Screen name = {'Signup'} component = {SignupScreen}/>
      <Stack.Screen name = {'Login'} component = {LoginScreen}/>
    </Stack.Navigator>
  )
}

export {
  signUpLoginStack
}