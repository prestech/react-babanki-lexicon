/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
'use strict'

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Ionicons from "react-native-vector-icons/Ionicons";
import LexiconView from './src/components/views/LexiconView/LexiconView'
import { clear } from 'sisteransi';
import HomeView from './src/components/views/HomeView/HomeView'


import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteView from './src/components/views/FavoriteView/FavoriteView';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  
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
            <Tab.Screen name="Favorite" 
                        component={FavoriteView}
                       
                        />
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
