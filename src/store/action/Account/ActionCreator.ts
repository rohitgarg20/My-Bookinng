import { userSignout } from './../../../app-utils/AppUtils';
import { hideActivityLoader } from './../../../service/loader-service/LoaderService';
import auth  from '@react-native-firebase/auth';
import { ToastAndroid } from 'react-native';
import { showActivityLoader } from '../../../service/loader-service/LoaderService';
import { USER_LOGOUT } from './ActionTypes';
import { setCurrentStackName } from '../../../service/navigation/NavigationService';
const logoutUser = () => {

  return (dispatch) => {
    showActivityLoader(dispatch)
    auth().signOut().then(async() => {
      ToastAndroid.show('User logged out successfully', ToastAndroid.SHORT)
      setCurrentStackName(dispatch, 'SignupLogin')
      await userSignout()
      hideActivityLoader(dispatch)
    })
  }
}

export {
  logoutUser
}