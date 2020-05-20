import React from 'react';
import GridAdapter from '../../utility/Layout/Grid/GridAdapter'

import {
        StyleSheet,
        } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';

import {categories} from '../../utility/Service/ProvideCategories'; 

const stack = createStackNavigator();
/***
 * TODO
 * --Add onPress call back methods 
 */
export default class LexiconCategory extends React.Component{

    constructor(){
        super();
    }

    render(){

      return(
        <GridAdapter
          data={categories}
          canSelectItem = {false}
          onCellPressed = {(category)=>{
            this.props.navigation.navigate("LexiconList", {category});
            console.log("Category cell pressed: ["+category+"]");
          }}
        />
      );
    }   
}
const styles = StyleSheet.create({
      
});


  /**
import { FlatList,
         View,
         Image,
         StyleSheet,
         Text,
         ScrollView,
         TouchableOpacity
        } from 'react-native'
//https://aboutreact.com/example-of-gridview-using-flatlist-in-react-native/
export default class GridView extends React.Component{

    constructor(){
        super()
        this.state = {
            dataSource: ['Calendar', 'Names', 'Food', 'Animal', 'Family', 'Nature',
                         'tech', 'tools', 'disease', 'nature', 'add'],
        }
    }

   
    getListItem(item){
      if(item == "add"){
        return (
          <TouchableOpacity style={{backgroundColor:'green', margin: 10}}>
            <Image
              style={styles.image}
              source={{uri:'https://via.placeholder.com/300'}}
            />
          </TouchableOpacity>
      )
      }else{ 
        return (
            <TouchableOpacity style={{backgroundColor:'brown', margin: 10}}>
              <Image
                style={styles.image}
                source={{uri:'https://via.placeholder.com/300'}}
              />
            </TouchableOpacity>
        )

       }
    }

    render(){

      return(
        <>
           <FlatList
              style = {styles.container}
              data={this.state.dataSource}
              renderItem={({item})=>{
                return (this.getListItem(item))
              }}
              numColumns={3}
              keyExtractor={item=> item}
           />
        </>
      );
    }
    
}


const styles = StyleSheet.create({
    container: {
      paddingTop: '15%',
      flexDirection: 'row',
      flex: 1,
    },
  
    image: {
      width: 100,
      height: 100,
      alignItems: 'center'
    
    },
  });
   */
  

   /***
    * import React from 'react';
import { FlatList,
         View,
         Image,
         StyleSheet,
         Text,
         ScrollView,
         TouchableOpacity
        } from 'react-native'
//https://aboutreact.com/example-of-gridview-using-flatlist-in-react-native/
export default class GridView extends React.Component{

    constructor(){
        super()
        this.state = {
            dataSource: ['Calendar', 'Names', 'Food', 'Animal', 'Family', 'Nature',
                         'tech', 'tools', 'disease', 'nature', 'Fashion', 'Tradition',
                         'Calendar', 'Names', 'Food', 'Animal', 'Family', 'Nature',
                         'Calendar', 'Names', 'Food', 'Animal', 'Family', 'Nature','add'],
        }
    }

    getListItem(item){
      if(item == "add"){
        return (
          <TouchableOpacity>

            <Image
              style={styles.image}
              source={{uri:'https://via.placeholder.com/300'}}
            />
            <Text>{item}</Text>
        </TouchableOpacity>

      )
      }else{ 
        return (
            <TouchableOpacity>
              <Image
                style={styles.image}
                source={{uri:'https://via.placeholder.com/300'}}
              />
              <Text>{item}</Text>
            </TouchableOpacity>
            
        )

       }
    }
    constGrid(){
        return(<View style={styles.container}>
          {this.state.dataSource.map( (item, index)=>this.getListItem(item))}
        </View>);
    }
    render(){

      return(
        <ScrollView>
            {this.constGrid()}
        </ScrollView>
        
      );
    }   
}
const styles = StyleSheet.create({
    container: {
      paddingTop: '15%',
      justifyContent:'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
    },

    image: {
      width: 100,
      height: 100,
      alignSelf:'flex-start',
      margin: 10
    
    },
  });
    */