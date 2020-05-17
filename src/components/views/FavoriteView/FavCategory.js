import React from 'react';
import GridAdapter from '../../utility/Layout/Grid/GridAdapter'
import { default as Zebra } from '../../../resource/image/Dice'

import { FlatList,
         View,
         Image,
         StyleSheet,
        } from 'react-native'

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
              {text:'Fav Calendar', imageUri:Zebra},
              {text:'Fav Name', imageUri:Zebra}, 
              {text:'Fav Food', imageUri:Zebra}, 
              {text:'Fav Animal', imageUri:Zebra}, 
              {text:'Fav Family', imageUri:Zebra}, 
            ],
        }

        this.onAddItem = this.onAddItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
    }

    onAddItem(title){
      console.log("new category added");
      this.setState( (state)=> {
         const dataSource = state.dataSource.push( {text:title, imageUri:Zebra});
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
      selectMode = 'none'
      canDeleteItem = true
      if(this.props.route.params){
         selectMode = this.props.route.params.selectMode;
         canDeleteItem = this.props.route.params.canDeleteItem
      }
      
      
      return(
        <GridAdapter
          data={this.state.dataSource}
          canSelectItem = {true}
          onCellPressed = {(category)=>{
            console.log("Fav Category cell pressed: ["+category+"]");
            this.props.navigation.navigate("FavList",{category});
          }}
          onDeleteItem = {this.onDeleteItem}
          onAddItem = {this.onAddItem}
          selectModeType = { (selectMode)?selectMode: 'none'}
          canDeleteItem = {canDeleteItem}
      
        />
      );
    }   
}
const styles = StyleSheet.create({
      
  });