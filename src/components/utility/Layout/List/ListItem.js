import React, {Component} from 'react'

import {Icon} from 'react-native-elements'
import {
        StyleSheet,
        Text,
        View,
        TouchableOpacity
        } from 'react-native'

export default class ExpandableItem extends React.Component{ 

    constructor(){
        super()
        this.state = {
            itemHeight: 0
        }
    }

    render(){
        return (
            <View style={this.props.style}>
    
                <View style={styles.visibleSection}> 
                    <TouchableOpacity style={styles.lexTopSubContainer}>
                            <Text style={styles.lexItemWordContainer} >
                                    {this.props.nativeWord}
                            </Text>
                            <Text style={styles.lexItemWordContainer} >
                                    {this.props.englishWord}
                            </Text>
                    </TouchableOpacity> 
    
                    <View style={styles.speakFavContainer}>
                        
                        <TouchableOpacity style={styles.speaker}>
                                <Icon
                                    name='volume-up'
                                    type='font-awesome'
                                    color='black' //color will change when clicked 
                                    size={26}
                                    onPress={this.props.onSpeakerIconTouch}
                                />
                        </TouchableOpacity>  
        
                        <TouchableOpacity style={styles.speaker}>
                                <Icon
                                    name='star'
                                    type='font-awesome'
                                    color='black' //color will change when clicked
                                    size={26}
                                    onPress={this.props.onLikeIconTouch}
                                />
                        </TouchableOpacity>
                            
                    </View>
               </View>
    
               <View style={ {height: this.state.itemHeight } }>
                   <Text> Only see text when expanded</Text>
               </View>
    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        margin: 4,

    },
    visibleSection:{
        borderWidth: 1,
        margin: 4,
        flexDirection: 'row'
    },
    expandableSection:{
        borderWidth: 1, 
        overflow:'hidden', 
        backgroundColor: '#FF33'
    },
    lexTopSubContainer:{
        borderWidth: 1,
        marginRight: 1,
        marginBottom: 2,
        marginTop: 2,
        width: '75%'

    },
    lexItemWordContainer:{
        borderWidth: 1,
        marginRight: 1,
        marginBottom: 1,
    },
    speakFavContainer:{
        borderWidth: 1,
        marginRight: 1,
        marginBottom: 1,
        width: '25%',
        flexDirection: 'row',

    },
    speaker:{
        borderWidth: 1,
        marginRight: 1,
        width: '50%',
    },
    favorite:{
        borderWidth: 1,
        marginRight: 1,
        width: '50%',
    }
});