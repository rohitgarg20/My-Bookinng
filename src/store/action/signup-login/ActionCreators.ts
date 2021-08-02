import { setCurrentStackName } from './../../../service/navigation/NavigationService';
import { updateCurrentStackName } from './../Navigation/ActionCreator';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { hideActivityLoader } from './../../../service/loader-service/LoaderService';
import { SIGNIN_USER_ACTION, SIGNUP_USER_ACTION } from "./ActionTypes";
import auth  from '@react-native-firebase/auth'
import { showActivityLoader } from "../../../service/loader-service/LoaderService";
import { ToastAndroid } from 'react-native';
import { updateUserLoggedInstatus } from '../../../app-utils/AppUtils';


const createUser = (payload) => {
    return (dispatch) => {
      showActivityLoader(dispatch)
      const { emailId, password } = payload
      auth().createUserWithEmailAndPassword(emailId, password).then((response) => {
      console.log('responseresponseresponse', response)
      dispatch({
        type: SIGNUP_USER_ACTION
      })
      setCurrentStackName(dispatch, 'homeStack')
      updateUserLoggedInstatus(true)
      hideActivityLoader(dispatch)
    }).catch((err) => {
      ToastAndroid.show(err.message, ToastAndroid.SHORT)
      hideActivityLoader(dispatch)

    })


    }

  }

  const loginUser = (payload) => {
    return (dispatch) => {
      showActivityLoader(dispatch)
      const { emailId, password } = payload
      auth().signInWithEmailAndPassword(emailId, password).then((response) => {
      console.log('responseresponseresponse', response)
      dispatch({
        type: SIGNIN_USER_ACTION
      })
      setCurrentStackName(dispatch, 'homeStack')
      updateUserLoggedInstatus(true)
      hideActivityLoader(dispatch)
    }).catch((err) => {
      let msgToShow = 'No user registered with this mail id. Please register'
      if(err.code === 'auth/user-not-found') {
        ToastAndroid.show(msgToShow, ToastAndroid.SHORT)
      } else if(err.code === 'auth/wrong-password' ){
        msgToShow = 'The password is invalid or the user does not have a password'
        ToastAndroid.show(msgToShow, ToastAndroid.SHORT)
      } else {
        ToastAndroid.show(err.message, ToastAndroid.SHORT)
      }
      hideActivityLoader(dispatch)

    })

    }

  }

  const facebookAuth = () => {
    return async (dispatch) => {
      showActivityLoader(dispatch)
      LoginManager.logOut()
      const fbData = await LoginManager.logInWithPermissions(['public_profile', 'email'])
      if(fbData.isCancelled) {
        hideActivityLoader(dispatch)
        return ToastAndroid.show('User cancelled the sign in process', ToastAndroid.SHORT);

      }
      const data = await AccessToken.getCurrentAccessToken()
      if (!data) {
        hideActivityLoader(dispatch)
        return ToastAndroid.show('Something went wrong obtaining access token', ToastAndroid.SHORT);

      }
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      console.log('facebookAuthfacebookAuthfacebookAuth', facebookCredential)
      const authstate  = auth().signInWithCredential(facebookCredential)
      console.log('authstateauthstate', authstate)
      setCurrentStackName(dispatch, 'homeStack')
      updateUserLoggedInstatus(true)
      hideActivityLoader(dispatch)
    }

  }

export {
  createUser,
  loginUser,
  facebookAuth
}