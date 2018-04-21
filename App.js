/**
 *  created on 15th April 2018
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import helloWorld from './reducers/index'
import HelloWorld from './containers/HelloWorld'
import { View } from 'react-native'

var store = createStore(helloWorld)

export default class App extends Component {
  render() {
    return (
        <Provider store = { store }>
          <View className="app">
            <HelloWorld />
          </View>
        </Provider>
    );
  }
}

