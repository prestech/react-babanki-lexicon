import React , {Component} from 'react';
import { FlatList,
         View,
         SafeAreaView,
         Image,
         StyleSheet,
         Text,
         ScrollView,
         TouchableOpacity
        } from 'react-native'
import GridCell from './GridCell';
import {Icon} from 'react-native-elements'

//const imagePath = require('../../../resource/citrus.jpg');
//https://aboutreact.com/example-of-gridview-using-flatlist-in-react-native/

/***
 * TODO
 * -Need a button and a function to exit out of select mode
 * -Need a button and a function to add grid cell when in dynamic mode
 * -Need a function to delete selected cell(s) 
 * -Need a function to edit selected grids' naming/text
 * -Need a function to open grid cell content
 */
export default class GridAdapter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectItems: [],
            isInSelectMode: false,
            imageBlurLevel: 1
        }
       
      
        this.addToListOfSelectedItems = this.addToListOfSelectedItems.bind(this);
        this.removeFromListOfSelectedItems = this.removeFromListOfSelectedItems.bind(this); 
        this.exitSelectMode = this.exitSelectMode.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
    }
    componentDidMount(){
      this.setState({
        isInSelectMode: this.props.canSelectItem

      })
    }
    switchToSelectMode = ()=>{
      console.log("call back switchToSelectMode")
      this.setState({
        isInSelectMode: true
      })
    }
    exitSelectMode(){
      console.log("Exiting select mode")
      this.setState({
        isInSelectMode: false,
        selectItems: []
      })
      //refresh/reload gridcells
    }
    
    addToListOfSelectedItems(title){
      console.log("adding", title, "to list of selected items");
      this.setState( (state)=>{
        const selectItems = state.selectItems.push(title);
        return selectItems;
      },
      ()=>{console.log("selectItems: "+ this.state.selectItems)})
    }

    removeFromListOfSelectedItems(title){
      console.log("adding", title, "to list of selected items");
      this.setState( (state)=>{
        const selectItems = state.selectItems.filter( (text) => text!=title);
        return selectItems;
      }, ()=>{
        console.log("selectItems: "+ this.state.selectItems);
      })
      
    }
    onDeleteItem(){
      console.log("OnDelete function called...")
      if(this.props.canSelectItem === true){
        console.log("Deleting selected items: ["+this.state.selectItems+"]")
        let selectedItemStr = this.state.selectItems.join(",");
        this.props.onDeleteItem(selectedItemStr);
      }
    }
    
    onAddItem(){
      this.props.onAddItem();
    }

    mapItemToView(item){
      return(
          <GridCell
             imageUri={item.imageUri}
             text={item.text}
             switchToSelectMode={this.switchToSelectMode}
             isInSelectMode = {this.state.isInSelectMode}
             canSelectItem = {this.props.canSelectItem}
             addToListOfSelectedItems= {this.addToListOfSelectedItems}
             removeFromListOfSelectedItems = {this.removeFromListOfSelectedItems}
             onPress = {this.props.onCellPressed}
              
           />
         );
    }
    groupViews(){
        return(
        <View style={styles.container}>

          {this.props.data.map( (item, index)=>this.mapItemToView(item))}
        </View>);
    }

    render(){

      return(
       <>
          <ScrollView>
            {this.groupViews()}
          </ScrollView>
          
          <View style={styles.modifiers}>
            <Icon
                raised
                name='md-add'
                type='ionicon'
                color='black' //color will change when clicked
                size={26}
                onPress={()=>{
                  console.log("Added new item");
                  this.onAddItem();
                }}
              />
             <Icon
                raised
                name='ios-trash'
                type='ionicon'
                color='black' //color will change when clicked
                size={26}
                onPress={ ()=>this.onDeleteItem()}
              />
              <Icon
                raised
                name='md-create'
                type='ionicon'
                color='black' //color will change when clicked
                size={26}
                //onPress={}
              />
              <Icon
                raised
                name='md-close'
                type='ionicon'
                color='black' //color will change when clicked
                size={26}
                onPress={this.exitSelectMode}
              />

          </View>
       </>        
      );
    }   
}


const styles = StyleSheet.create({
    container: {
      justifyContent:'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
    },
    modifiers:{
      position:'absolute',
      bottom:'5%',
    },
    icon:{
      
    }
  });

   

