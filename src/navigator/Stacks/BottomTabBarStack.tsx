import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React  from "react";
import { BottomTabBarComponent } from "../../components";
import { AccountScreen } from "../../screens/Account/AccountScreen";
import { BookingScreen } from "../../screens/Booking/Booking";
import { HomeScreen } from "../../screens/HomeScreen/HomeScreen";
import { MessageScreen } from "../../screens/Message/MessageScreen";
import { NewsScreen } from "../../screens/News/NewsScreen";

const bottomTabBarStack = () => {
  const tab = createBottomTabNavigator()
  const bottomTabBarKeys = {
    Home: {
      component: HomeScreen,
    },

    Booking: {
      component: BookingScreen,
    },

    Messages: {
      component: MessageScreen,
    },

    News: {
      component: NewsScreen,
    },
    Account: {
      component: AccountScreen
    }
  }

  return (
    <tab.Navigator
      initialRouteName='Home'
      tabBar={props => <BottomTabBarComponent {...props} />}
    >
      {Object.entries(bottomTabBarKeys).map(([name, component]) => <tab.Screen name={name} {...component} />)}
    </tab.Navigator>
  )
}

export {
  bottomTabBarStack
}
