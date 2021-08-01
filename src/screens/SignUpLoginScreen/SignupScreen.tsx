import auth  from '@react-native-firebase/auth'
import React, { Component } from 'react'
import { View, Text, Image, TextInputProps, FlatList, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { strings } from '../../common/strings'
import { FormComponent } from '../../components'
import { icons } from '../../icons/icons'
import { createUser, facebookAuth } from '../../store/action/signup-login/ActionCreators'
import { styles } from './styles'
import { GoogleSignin } from '@react-native-google-signin/google-signin'


const TEXT_INPUT_BOX_KEYS = {
  EMAIl_ID: 'email',
  PASSWORD: 'password'
}

const INPUT_FORM = {
  [TEXT_INPUT_BOX_KEYS.EMAIl_ID]: {
    placeholder: 'Email id',
    value: '',
    textInputKey: TEXT_INPUT_BOX_KEYS.EMAIl_ID
  },
  [TEXT_INPUT_BOX_KEYS.PASSWORD]: {
    placeholder: 'Passowrd',
    value: '',
    textInputKey: TEXT_INPUT_BOX_KEYS.PASSWORD,
    secureTextEntry: true

  }
}

interface ITEXT_INPUT extends TextInputProps {
  textInputKey?: string
}

interface IState{
  emailId: string
  password: string
}

interface IProps {
  navigation?: any
  onPressSignupButton?: (payload) => void
  socialActionEvent?: () => void

}


class SignupScreen extends Component<IProps, IState> {



  renderHeaderComponent = () => {
    const { SIGN_UP } = strings
    const { navigation } = this.props
    return (
      <View style = {styles.headerContainer}>
        <TouchableOpacity style = {styles.backIconContainer} onPress = {() => navigation.goBack()}>
          <Image source = {icons.BACK_ARROW} style ={styles.backArrow} resizeMode = {'contain'}/>
        </TouchableOpacity>
         <Text style = {styles.headingLabel}>{SIGN_UP.HEADING}</Text>
      </View>
    )
  }



  onPressSignupButton = (emailId, password) => {
    const { onPressSignupButton } = this.props
    onPressSignupButton({
      emailId,
      password
    })
  }

  onGoogleSignIn  = async () => {
    try  {
     const hasPlayservecies =  await GoogleSignin.hasPlayServices()
     console.log('hasPlayservecieshasPlayservecies', hasPlayservecies)
      const config = await GoogleSignin.configure({
        webClientId: '950183129685-j2ajq7f4r17sutgq4o1o5bqt0pnt1mnk.apps.googleusercontent.com',
      })
      console.log('configconfigconfig', config)
      const userData = await GoogleSignin.signIn()
      console.log('userDatauserDatauserData', userData)
      const tokenData = await GoogleSignin.getTokens()
      console.log('tokenDatatokenDatatokenData', tokenData)
    } catch(err) {
      console.log('error is', err.message, err.code)
    }
  }



  renderFormContainer = () => {
    const { SIGN_UP } = strings
    const { socialActionEvent }  = this.props
    return (
      <FormComponent
        buttonText = {SIGN_UP.BUTTON_LABEL}
        onPressButton = {this.onPressSignupButton}
        onPressFBButton = {socialActionEvent}
        onPressGoogleButton = {this.onGoogleSignIn}
        />
    )
  }

  render() {
    return (
     <View style = {styles.mainContainer}>
       {this.renderHeaderComponent()}
       {this.renderFormContainer()}
     </View>
    )
  }
}

const mapStateToProps = (state) => state


const mapDispatchToProps = (dispatch) => ({
  onPressSignupButton: (payload) => dispatch(createUser(payload)),
  socialActionEvent: () => dispatch(facebookAuth())

})

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)
