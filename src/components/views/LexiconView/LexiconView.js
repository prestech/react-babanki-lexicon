import React from 'react';
import GridAdapter from '../../utility/Layout/Grid/GridAdapter'

import { FlatList,
         View,
         Image,
         StyleSheet,
        } from 'react-native'

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './Categories';
import LexiconList from './LexiconList';
import AddFavView from '../FavoriteView/AddFavView';

const imagePath = 'https://via.placeholder.com/150';
const stack = createStackNavigator();
/***
 * TODO
 * --Add onPress call back methods 
 */
export default class LexiconView extends React.Component{

    constructor(){
        super();
        this.state = {}
    }


    render(){
      return(
        <stack.Navigator initialRouteName="Categories">
            <stack.Screen name="Categories" component={Categories} />
            <stack.Screen name="LexiconList" component={LexiconList}/>
            <stack.Screen name="AddFavView" component={AddFavView}/>
        </stack.Navigator>
        
      );
    }   
}
const styles = StyleSheet.create({
      
});


  