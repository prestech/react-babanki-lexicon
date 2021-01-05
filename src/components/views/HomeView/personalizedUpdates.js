import React from 'react'
import {Icon} from 'react-native-elements'

import {
         View,
         StyleSheet,
         Text,
        } from 'react-native';

import {Card} from 'react-native-shadow-cards'

export default class Personalized extends React.Component{


    constructor(props){
        super(props)
    }

    render(){
        return (
            <Card style={this.props.style}>
                    
                <View style={styles.childview}>
                    <Text>Starred</Text>
                    <Text>Count: {10}</Text>
                </View>
                    
            </Card>
        )
    }
}


const styles = StyleSheet.create({
 
    childview:{
        paddingTop: 10,
        flexWrap: 'wrap',
        fontSize: 12,
        flex: 1,
        flexDirection: 'column',
        borderWidth: 2
    }
  });
