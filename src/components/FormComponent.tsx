import React, { Component } from 'react'
import auth  from '@react-native-firebase/auth'
import { View, Text, Image, TextInputProps, FlatList, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { styles } from './styles'
import { strings } from '../common/strings'
import { icons } from '../icons/icons'
import { get } from 'lodash'
import { emailIdValidator, passwordValidator } from '../utils/Validator'

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
  errorMsg?: string
}

interface IState{
  emailId: string
  password: string
  emailErrorMsg: string
  passwordErrorMsg: string
}

interface IProps {
  navigation?: any
  buttonText: string
  onPressButton: (emailId, password) => void
  onPressFBButton?: () => void
  onPressGoogleButton?: () => void
}

export class FormComponent extends Component<IProps, IState> {
  state = {
    emailId: '',
    password: '',
    emailErrorMsg: '',
    passwordErrorMsg: ''
  }

  onChangeInputValue = (textInputKey, value) => {
    const { EMAIl_ID, PASSWORD  } = TEXT_INPUT_BOX_KEYS
    if(textInputKey === EMAIl_ID){
      this.setState({
        emailId: value,
        emailErrorMsg: ''
      })
    } else {
      this.setState({
        password: value,
        passwordErrorMsg: ''
      })
    }
  }


  renderTextInputComponent = (data: ITEXT_INPUT) => {
    const { placeholder = '', secureTextEntry = false, value = '', textInputKey, errorMsg = '' } = data
    return (
      <View>
      <View style = {styles.inputContainer}>
        <TextInput
          placeholder = {placeholder}
          secureTextEntry = {secureTextEntry}
          value = {value}
          onChangeText = {(value) => this.onChangeInputValue(textInputKey, value)}
          />

      </View>
      {errorMsg ? <Text style = {styles.errorMsg}>{errorMsg}</Text> : null}
      </View>
    )
  }

  renderFormContainer = () => {
    const { emailId, password, emailErrorMsg, passwordErrorMsg } = this.state
    return (
      <View>
        <FlatList
          style = {{
            marginTop: 150,
            marginBottom: 30
          }}
          data = {Object.keys(INPUT_FORM)}
          renderItem = {({item, index}) => {
            const { textInputKey } = INPUT_FORM[item]
            const formData = {
              ...INPUT_FORM[item],
              value: textInputKey === TEXT_INPUT_BOX_KEYS.EMAIl_ID ? emailId : password,
              errorMsg: textInputKey === TEXT_INPUT_BOX_KEYS.EMAIl_ID ? emailErrorMsg : passwordErrorMsg
            }
            return this.renderTextInputComponent(formData)
          }}
          keyExtractor = {(item, index) => item }
          ItemSeparatorComponent = {() => <View
            style = {{
              marginTop: 10
            }}
            />}
        />
      </View>
    )
  }

  validateEmailPassword = () => {
    const { emailId, password } = this.state
    let emailErrorMsg = ''
    let passwordErrorMsg = ''
    let isEmailValid = true
    let isPasswordValid = true
    if(get(emailId, 'length') === 0) {
      emailErrorMsg = 'Email id cannot be empty'
      isEmailValid = false
    } else if(!emailIdValidator(emailId)){
      emailErrorMsg = 'Please enter a valid email id'
      isEmailValid = false

    }

    if(get(password, 'length') === 0) {
      passwordErrorMsg = 'Password cannot be empty'
      isPasswordValid = false
    } else if(!passwordValidator(password)){
      passwordErrorMsg = 'Password length cannot be less than 6'
      isPasswordValid = false
    }
    this.setState({
      emailErrorMsg,
      passwordErrorMsg
    })
    return isEmailValid || isPasswordValid
  }

  onPressButton = () => {
    const { emailId, password } = this.state
    const { onPressButton } = this.props
    Keyboard.dismiss()
    if(this.validateEmailPassword()){
      onPressButton(emailId, password)
    }
  }

  renderButton = () => {
    const { SIGN_UP } = strings
    const { buttonText, onPressButton } = this.props
    return (
      <TouchableOpacity style = {styles.signInButton} onPress = {this.onPressButton}>
        <Text style = {styles.buttonLabel}>{buttonText}</Text>
      </TouchableOpacity>
    )
  }

  renderFaceBookSignIn = () => {
    const { SIGN_UP } = strings
    const { buttonText, onPressFBButton } = this.props
    return (
      <TouchableOpacity style = {styles.fbButton} onPress = {onPressFBButton}>
        <Text style = {styles.buttonLabel}>Facebook {buttonText}</Text>
      </TouchableOpacity>
    )
  }



  render() {
    return (
      <View>
          {this.renderFormContainer()}
          {this.renderButton()}
          {this.renderFaceBookSignIn()}
      </View>
    )
  }
}
