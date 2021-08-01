import auth  from '@react-native-firebase/auth'
import React, { Component } from 'react'
import { View, Text, Image, TextInputProps, FlatList, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { strings } from '../../common/strings'
import { FormComponent } from '../../components'
import { icons } from '../../icons/icons'
import { facebookAuth, loginUser } from '../../store/action/signup-login/ActionCreators'
import { styles } from './styles'
import { LoginManager, AccessToken } from  'react-native-fbsdk-next'

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

const GRAPH_API_URL = "https://graph.facebook.com/v11.0/me?fields=name,friends,email&access_token="

interface ITEXT_INPUT extends TextInputProps {
  textInputKey?: string
}

interface IState{
  emailId: string
  password: string
}

interface IProps {
  navigation?: any
  onPressSigninButton?: (payload) => void
  socialActionEvent?: () => void
}


class LoginScreen extends Component<IProps, IState> {

  renderHeaderComponent = () => {
    const { SIGN_IN } = strings
    return (
      <View style = {styles.headerContainer}>
        {/* <View style = {styles.backIconContainer}>
          <Image source = {icons.BACK_ARROW} style ={styles.backArrow} resizeMode = {'contain'}/>
        </View> */}
         <Text style = {styles.headingLabel}>{SIGN_IN.heading}</Text>
      </View>
    )
  }



  onPressSignInButton = (emailId, password) => {
    const { onPressSigninButton } = this.props
    onPressSigninButton({
      emailId,
      password
    })
  }


  navigateToSignUpscreen = () => {
    const { navigation } = this.props
    navigation.navigate('Signup')

  }

  renderCreateYourAccountView = () => {
    const { CREATE_YOUR_ACCOUNT, HAVENT_REGIStERED } = strings.SIGN_IN
    return (
      <View style = {{
        marginTop: 40,
        borderTopWidth: 1,
        borderColor: '#eee',
        paddingVertical: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
      }} >

        <Text style = {{
          color: '#666666'
        }}>{HAVENT_REGIStERED}</Text>
        <TouchableOpacity onPress = {this.navigateToSignUpscreen}>
          <Text style ={{
            color: 'orange'
          }}>{CREATE_YOUR_ACCOUNT}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderFormContainer = () => {
    const { heading } = strings.SIGN_IN
    const { socialActionEvent } = this.props
    return (

      <FormComponent
        buttonText = {heading}
        onPressButton = {this.onPressSignInButton}
        onPressFBButton = {socialActionEvent}
      />
    )
  }

  render() {
    return (
     <View style = {styles.mainContainer}>
       {this.renderHeaderComponent()}
       {this.renderFormContainer()}
       {this.renderCreateYourAccountView()}
     </View>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  onPressSigninButton: (payload) => dispatch(loginUser(payload)),
  socialActionEvent: () => dispatch(facebookAuth())
})

export default connect(null, mapDispatchToProps)(LoginScreen)

