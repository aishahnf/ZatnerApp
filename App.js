//
//  App.js
//  Project
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { createStackNavigator, createAppContainer } from "react-navigation"
import SplashScreen1 from "./App/SplashScreen1/SplashScreen1"
import React from "react"
import {View,Text} from "react-native"
import Login from "./App/Login/Login";

const PushRouteOne = createStackNavigator({
  SplashScreen1: {
    screen: SplashScreen1,
  },
}, {
  initialRouteName: "SplashScreen1",
})

const PushRouteLogin= createStackNavigator({
  Login: {
    screen: Login,
  },
}, {
  initialRouteName: "Login",
})

const RootNavigatorLogin = createStackNavigator({
  PushRouteLogin: {
    screen: PushRouteLogin,
  },
}, {
  mode: "modal",
  headerMode: "none",
  initialRouteName: "PushRouteLogin",
})


const RootNavigator = createStackNavigator({
  PushRouteOne: {
    screen: PushRouteOne,
  },
}, {
  mode: "modal",
  headerMode: "none",
  initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)

const AppContainerLogin = createAppContainer(RootNavigatorLogin)



export default class App extends React.Component {

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
        setTimeout(
            () => { resolve('result') },
            2000
        )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
  constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }
  render() {
    if (this.state.isLoading) {
      return <AppContainer />;
    }
      return <AppContainerLogin />;

    // (
    //     <View style={ {width: 100, height:100}}>
    //       <Text style={{width: 100, height:100}}>
    //         Welcome to React Native!
    //       </Text>
    //       <Text style={{width: 100, height:100}}>
    //         Reload the App to see a splash screen
    //       </Text>
    //     </View>
    // );
  }
}
