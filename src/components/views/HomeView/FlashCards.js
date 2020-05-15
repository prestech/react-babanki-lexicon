import React from 'react'

import {
         View,
         Text,
         StyleSheet,
         Image
        } from 'react-native'

import ListAdapter from '../../utility/Layout/List/ListAdapter'

import {Card} from 'react-native-shadow-cards'

const imageUrl = "https://via.placeholder.com/150";

export default class FlashCard extends React.Component{

    constructor(props){
        super(props);

        this.state={
            data:["EASY","INTERMEDIATE","HARD"],
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
                    
                    <Text style={{alignSelf:'center', fontSize:15, fontFamily:'cochin'}}>{item}</Text>
               </View>)
    }
    extractKey(item){
        return item;
    }

    render(){

        return (
            <>
                <Text style={{fontFamily:'Cochin', fontSize:20, marginTop: '2%'}}>Flashcards</Text>

                <Card style={this.props.style}>
                    
                        <ListAdapter
                            contentContainerStyle={styles.list}
                            data={this.state.data}
                            listItem = {this.setListItems}
                            extractKey = {this.extractKey}
                            horizontal = {true}
                        />
                    
                </Card>
            </>
        )
    }
}

const styles = StyleSheet.create ({
    listItem:{
        backgroundColor: 'white',
        margin: 1,
    },   
    image: {
          width: 100,
          height: 100,
          alignSelf:'flex-start',
          margin: 10,
          borderRadius: 65
        },
    
    list: {
        flexGrow: 1, 
        justifyContent:'center'
    }
})
