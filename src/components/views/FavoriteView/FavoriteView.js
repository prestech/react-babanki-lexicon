import React from 'react';
import GridAdapter from '../../utility/Layout/Grid/GridAdapter'

import { FlatList,
         StyleSheet,
         Button,
        } from 'react-native'

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FavCategory from './FavCategory';
import FavList from './FavList';

const stack = createStackNavigator();
/***
 * TODO
 * --Add onPress call back methods 
 */
export default class FavoriteView extends React.Component{

    constructor(){
        super();
        this.state = {}
    }


    render(){
      return(
        <stack.Navigator initialRouteName="FavCategory">
            <stack.Screen name="FavCategory" component={FavCategory} />
            <stack.Screen name="FavList" component={FavList}/>
        </stack.Navigator>
        
      );
    }   
}
const styles = StyleSheet.create({
      
});


  