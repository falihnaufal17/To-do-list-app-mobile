import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Splash from './src/screens/splash/splash'
import MainNavigation from './src/navigations/mainNavigation'
import store from './src/publics/store';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: <Splash />
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        view: <MainNavigation />
      })
    }, 1500)
  }

  render() {
    return (
      <>
        <Provider store={store}>
          {this.state.view}
        </Provider>
      </>
    )
  }
}

export default App
