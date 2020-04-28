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
 * https://www.robinwieruch.de/react-state-array-add-update-remove
 */
export default class FavCategory extends React.Component{

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
        this.onDeleteItem = this.onDeleteItem.bind(this);
    }

    onAddItem(title){
      console.log("new category added");
      this.setState( (state)=> {
         const dataSource = state.dataSource.push( {text:title, imageUri:imagePath});
         return(dataSource);
      }
      , ()=> {
        console.log(this.state.dataSource);
      })
    }

    onDeleteItem(selectedItems){
      let itemList = selectedItems.split(',');
      console.log("FavCategory selectedItems: "+itemList);
      this.setState( (state)=>{
        return{dataSource: state.dataSource.filter( (item) => !itemList.includes(item.text))}
      })
    }

    render(){

      return(
        <GridAdapter
          data={this.state.dataSource}
          canSelectItem = {true}
          onCellPressed = {(category)=>{
            console.log("Fav Category cell pressed: ["+category+"]");
            this.props.navigation.navigate("FavList");
          }}
          onDeleteItem = {this.onDeleteItem}
          onAddItem = {this.onAddItem}
        />
      );
    }   
}
const styles = StyleSheet.create({
      
  });