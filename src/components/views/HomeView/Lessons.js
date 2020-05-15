import React from 'react'

import {
         View,
         StyleSheet,
         SafeAreaView,
         Text,
        } from 'react-native'
import {Divider} from 'react-native-elements'

import ListAdapter from '../../utility/Layout/List/ListAdapter'
import {Card} from 'react-native-shadow-cards'

export default class Lessons extends React.Component{
 
    constructor(props){
        super(props);

        this.state={
            data:["Beginners I","Beginners II","Intermediate I",
                 "Intermediate II","Advance I","Advanced II"],
        }

        this.setListItems = this.setListItems.bind(this)

    }

    setListItems(){
        const lessonVs = this.state.data.forEach( element =>  <Text style={{fontFamily:'Cochin', fontSize:20}}>{element}</Text>)
        return lessonVs;
    }
  
    render(){

        return (
            <>
                <Text style={{fontFamily:'Cochin', fontSize:20}}>Lessons</Text>
                    
                <Card style={styles.listItem}>
                    <Text style={{fontFamily:'Cochin', fontSize:20}}>{this.state.data[0]}</Text>
                </Card>

                <Card style={styles.listItem}>   
                    <Text style={{fontFamily:'Cochin', fontSize:20}}>{this.state.data[1]}</Text>
                </Card>
                <Card style={styles.listItem}>
                    <Text style={{fontFamily:'Cochin', fontSize:20}}>{this.state.data[2]}</Text>
                </Card>

                <Card style={styles.listItem}>
                    <Text style={{fontFamily:'Cochin', fontSize:20}}>{this.state.data[3]}</Text>
                </Card>

                <Card style={styles.listItem}>
                    <Text style={{fontFamily:'Cochin', fontSize:20}}>{this.state.data[4]}</Text>
                </Card>

                <Card style={styles.listItem}>
                    <Text style={{fontFamily:'Cochin', fontSize:20}}>{this.state.data[5]}</Text>
                </Card>
            </>
        )
    }
}

const styles = StyleSheet.create ({
    listItem:{
        alignSelf:'center',
        height: 50,
        backgroundColor: 'white',
        marginBottom: 1
    }
})
