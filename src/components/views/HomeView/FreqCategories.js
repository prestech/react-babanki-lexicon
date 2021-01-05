import React from 'react'

import {
         View,
         Text,
         StyleSheet,
         Image
        } from 'react-native'

import {Card} from 'react-native-shadow-cards'
import ListAdapter from '../../utility/Layout/List/ListAdapter'

const imageUrl = "https://via.placeholder.com/150";

export default class FreqCategories extends React.Component{

    constructor(props){
        super(props);

        this.state={
            data:["HISTORY","FOOD","SONGS","POEMS","STORIES","OTHERS"],
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
               <Text style={{fontFamily:'Cochin', fontSize:20}}>Cultural</Text>

                <Card style={this.props.style}>
                    
                        <ListAdapter 
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
          borderRadius: 10
        },
    
})
