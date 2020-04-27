import React from 'react';
import GridAdapter from '../../utility/Layout/Grid/GridAdapter'

import { FlatList,
         View,
         Image,
         StyleSheet,
        } from 'react-native'

const imagePath = 'https://via.placeholder.com/150';
/***
 * TODO
 * --Add onPress call back methods 
 */
export default class AddFavView extends React.Component{

    constructor(){
        super();
        this.state = {
            //Place holder data
            dataSource: [ 
              {text:'Fav Calendar', imageUri:imagePath},
              {text:'Fav Name', imageUri:imagePath}, 
              {text:'Fav Food', imageUri:imagePath}, 
              {text:'Fav Animal', imageUri:imagePath}, 
              {text:'Fav Family', imageUri:imagePath}, 
            ],
        }
        this.onAddItem = this.onAddItem.bind(this);
    }
    
      
    onAddItem(){
      console.log("new category added");
      this.setState( (state)=> {
       return {dataSource: state.dataSource.push( {text:'Fav Family', imageUri:imagePath})}
      }
      , ()=> {
        console.log(this.state.dataSource);
      })
    }

    render(){

      return(
        <GridAdapter
          data={this.state.dataSource}
          canSelectItem={true}
          onCellPressed = {(category)=>{
            console.log("Logic to add lexicon to favorite");
          }}
          
          onAddItem = {this.onAddItem}
        />
      );
    }   
}
const styles = StyleSheet.create({
      
  });