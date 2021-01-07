import React from 'react';
import GridAdapter from '../../utility/Layout/Grid/GridAdapter'

import { FlatList,
         View,
         Image,
         StyleSheet,
        } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import FlashCard from  './FlashCardView/FlashCards';
import HomeView from  './HomeView';
import CardResolver from './FlashCardView/CardResolver';

const stack = createStackNavigator();
/***
 * TODO
 * --Add onPress call back methods 
 */
export default class HomeViewNav extends React.Component{

    constructor(){
        super();
        this.state = {}
    }


    render(){
      return(
        <stack.Navigator initialRouteName="Home">
            <stack.Screen name="Home" component={HomeView} />
            <stack.Screen name="CardResolver" component={CardResolver}/>
            <stack.Screen name="FlashCard" component={FlashCard}/>
        </stack.Navigator>
        
      );
    }   
}
const styles = StyleSheet.create({
      
});


  