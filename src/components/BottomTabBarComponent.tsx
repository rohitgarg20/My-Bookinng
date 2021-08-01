import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { get, map } from 'lodash'
import { styles } from './styles'
import { icons } from '../icons/icons'

interface IProps {
  navigation?: any
  descriptors?: any
  state?: any
}
const tabBarIcons = {
  Home: {
    NormalIcon: icons.UNSELECTED_HOME,
    selectedIcon: icons.SELECTED_HOME
  },
  Booking: {
    NormalIcon: icons.UNSELECTED_BOOKING,
    selectedIcon: icons.SELECTED_BOOKING
  },
  Messages: {
    NormalIcon: icons.UNSELECTED_MESSAGES,
    selectedIcon: icons.SELECTED_MESSAGES
  },
  News: {
    NormalIcon: icons.UNSELECTED_NEWS,
    selectedIcon: icons.SELECTED_NEWS
  },
  Account: {
    NormalIcon: icons.UNSELECTED_ACCOUNT,
    selectedIcon: icons.SELECTED_ACCOUNT
  },

}
export class BottomTabBarComponent extends Component<IProps> {
  imageSource

  renderTabBarItem = (elemVal, elemInd) => {
    const { navigation } = this.props

    const activeTabIndex = get(this.props, 'state.index', 0)
    const isActiveTab = elemInd === activeTabIndex
    this.imageSource = isActiveTab ? get(tabBarIcons[elemVal.name], 'selectedIcon', ' ')
      : get(tabBarIcons[elemVal.name], 'NormalIcon', '')

    const tabBarName = elemVal.name
    const textColor = isActiveTab ? '#1D7DEA' : '#898989'

    return (
      <View style={styles.tabBarItemStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(elemVal.name)
          }}
        >
          <Image
            source={this.imageSource}
            style={styles.normalImageStyle}
            resizeMode={'contain'}
          />
              <Text
                numberOfLines={1}
                ellipsizeMode='tail'
                style={{ fontSize: 14, color: textColor }}
              >
                {tabBarName}
              </Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const routes = get(this.props, 'state.routes', [])

    return (
      <View style={styles.tabBarContainer}>
        {map(routes, (elemVal, elemInd) => this.renderTabBarItem(elemVal, elemInd))}
      </View>
    )
  }
}
