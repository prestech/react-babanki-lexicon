import React from 'react'

import {
         View,
         Text,
         StyleSheet,
         Image
        } from 'react-native'
import ListAdapter from '../../utility/Layout/List/ListAdapter'

const imageUrl = "https://via.placeholder.com/150";

export default class FreqCategories extends React.Component{

    constructor(props){
        super(props);

        this.state={
            data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
        }

        this.extractKey = this.extractKey.bind(this);
        this.setListItems = this.setListItems.bind(this)

    }

    setListItems(item){
       return ( <View style={styles.listItem}>
                     <Image 
                        style={styles.image }
                        source={ {uri:imageUrl} }
                        resizeMode = 'cover'
                    />
                    <Text>Box {item}</Text>
               </View>)
    }
    extractKey(item){
        return item;
    }

    render(){

        return (
            <View style={this.props.style}>
                
                    <ListAdapter 
                        data={this.state.data}
                        listItem = {this.setListItems}
                        extractKey = {this.extractKey}
                        horizontal = {true}
                    />
                 
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    listItem:{
        backgroundColor: 'white',
        margin: 3,
    },   
    image: {
          width: 100,
          height: 100,
          alignSelf:'flex-start',
          margin: 10,
          borderRadius: 65
        },
    
})
