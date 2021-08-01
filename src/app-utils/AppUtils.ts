import AsyncStorage  from "@react-native-async-storage/async-storage"

const USER_LOGGEDIN_STATUS = 'USER_LOGGEDIN_STATUS'

export const updateUserLoggedInstatus = async (status) => {
  await AsyncStorage.setItem(USER_LOGGEDIN_STATUS, JSON.stringify(status))
}

export const getUserLoggedInStatus = async () => {
  const status = await AsyncStorage.getItem(USER_LOGGEDIN_STATUS)
  if(status !== null){
    return JSON.parse(status)
  }
  return false
}

export const userSignout = async () => {
  await AsyncStorage.removeItem(USER_LOGGEDIN_STATUS)
}