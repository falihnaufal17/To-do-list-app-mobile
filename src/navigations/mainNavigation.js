import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../screens/home/home'
import Detail from '../screens/detail/detail'
const appNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Detail: {
        screen: Detail,
        navigationOptions: {
            header: null
        }
    }
})

export default createAppContainer(appNavigator)