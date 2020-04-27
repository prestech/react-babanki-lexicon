import React from 'react'

import {
         View,
         StyleSheet,
         SafeAreaView,
         Text,
        } from 'react-native'
import ListAdapter from '../../utility/Layout/List/ListAdapter'

export default class Lessons extends React.Component{
 
    constructor(props){
        super(props);

        this.state={
            data:["Beginners I","Beginners II","Intermediate I",
                 "Intermediate II","Advance I","Advanced II"],
        }

        this.extractKey = this.extractKey.bind(this);
        this.setListItems = this.setListItems.bind(this)

    }

    setListItems(item){
       return ( <View style={styles.listItem}>
                    <Text>{item}</Text>
               </View>)
    }
    extractKey(item){
        return item;
    }

    render(){

        return (
            <SafeAreaView style={this.props.style}>
                    <Text>Lessons</Text>
                    <ListAdapter 
                        data={this.state.data}
                        listItem = {this.setListItems}
                        extractKey = {this.extractKey}
                    />
                 
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create ({
    listItem:{
        height: 50,
        backgroundColor: 'white',
        margin: 3
    }
})
