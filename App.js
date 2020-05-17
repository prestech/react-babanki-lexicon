/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Ionicons from "react-native-vector-icons/Ionicons";
import LexiconView from './src/components/views/LexiconView/LexiconView'
import { clear } from 'sisteransi';
import HomeView from './src/components/views/HomeView/HomeView'

'use strict'

import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteView from './src/components/views/FavoriteView/FavoriteView';

//let SQLite = require('react-native-sqlite-storage');

const Tab = createBottomTabNavigator();


const App: () => React$Node = () => {
 /* SQLite.openDatabase({
      name: 'lexicon.db',
      createFromLocation: 1
    },
    ()=>{console.log('db has opened')},
    (erro)=>{console.log('db failed to open',erro)}
  )*/

  return (

        <NavigationContainer>
          <Tab.Navigator
                  screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === 'Home') {
                        iconName = focused
                          ? 'ios-home'
                          : 'ios-home';
                      } else if (route.name === 'Lexicon') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                      }else if (route.name === 'Favorite') {
                        iconName = focused ? 'ios-star' : 'ios-star-outline';
                      }
          
                      // You can return any component that you like here!
                      return <Ionicons name={iconName} size={size} color={color} />;
                    },
                  })}
          >
            <Tab.Screen name="Home" component={HomeView}/>
            <Tab.Screen name="Lexicon" component={LexiconView}/>
            <Tab.Screen name="Favorite" component={FavoriteView}/>
          </Tab.Navigator>
       </NavigationContainer>
       
  );
};

const styles = StyleSheet.create({
  container: {

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
