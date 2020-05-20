import React from 'react';
import GridAdapter from '../../utility/Layout/Grid/GridAdapter'
import { default as Zebra } from '../../../resource/image/Dice'

import {
         StyleSheet,
         Text
        } from 'react-native';

let SQLite = require('react-native-sqlite-storage');

const database = SQLite.openDatabase({name: 'lexicon.db',
                                     createFromLocation: 1},
                                    ()=>{console.log('db has opened')},
                                    (erro)=>{alert('db failed to open')} );

/***
 * TODO
 * --Add onPress call back methods 
 * https://www.robinwieruch.de/react-state-array-add-update-remove
 */
export default class AddFavorite extends React.Component{

    constructor(){
        super();
        this.state = {
            dataSource: [],
        }

        this.initFavoritesFromDb = this.initFavoritesFromDb.bind(this);
        this.addFavToDb = this.addFavToDb.bind(this);
        this.deleteFavoriteFromDb = this.deleteFavoriteFromDb.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
    }

    componentDidMount(){

      console.log("Componenet did mount");
      this.initFavoritesFromDb();
    }

    deleteFavoriteFromDb(selectedItem){
        database.transaction(tx =>{
          let sqlStatement = "DELETE FROM category WHERE name='"+selectedItem+"'";
          tx.executeSql(sqlStatement, [], (tx, result)=>{              
              console.log("Deleted item "+ result);
          }, (error)=>{
              console.log("Errro occurred while executing sql statement \n", error)
          });
        })
        //remove from memory 
    }
    
    initFavoritesFromDb(){
        database.transaction(tx =>{

          tx.executeSql("SELECT * FROM category", [], (tx, result)=>{
              
              let dataLength = result.rows.length;
              console.log("dataLength "+ dataLength);

              if(dataLength > 0 ){
                  let output = []
                  for(let i = 0; i < dataLength; i++){
                      output.push( {text:result.rows.item(i).name, 
                                    displayObj:(<Text style={{alignSelf:'center'}}>{result.rows.item(i).name}</Text>),
                                    showTitle: false
                                  });
                  }
                  this.setState({
                    dataSource:output
                  },()=>console.log("fav category data init successful"))
              }
          }, (error)=>{
              console.log("Errro occurred while executing sql statement \n", error)
          });
      });
    }

    addFavToDb(newItem){
      database.transaction(tx =>{
        let sqlStatement = "INSERT INTO category (name) VALUES ('"+newItem+"')";
        console.log("Executing insert statement for: "+ newItem);

        tx.executeSql(sqlStatement, [], ()=>{}, (error)=>{
            console.log("Errro occurred while executing sql statement \n", error)
        });
      })
    }

    onAddItem(title){
      console.log("new category added");
      this.setState( (state)=> {
         const dataSource = state.dataSource.push( { text:title, 
                                                      displayObj:(<Text style={{alignSelf:'center'}}>{title}</Text>),
                                                      showTitle: false
                                                   });
         return(dataSource);
      }
      ,()=> {
          this.addFavToDb(title);
      })
    }

    onDeleteItem(selectedItems){
      let itemList = selectedItems.split(',');
      console.log("Removing items from favorite: "+itemList);
      this.setState( (state)=>{
        return {dataSource:state.dataSource.filter( (item) => !itemList.includes(item.text))};
      },()=> {
        itemList.forEach(element => {
          this.deleteFavoriteFromDb(element);
        }); 
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