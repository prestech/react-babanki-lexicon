import React, {Component} from 'react'

import {Icon} from 'react-native-elements'
import {
        StyleSheet,
        Text,
        View,
        TouchableOpacity,
        Image
        } from 'react-native'

import {getComponent} from '../../../utility/Service/ProvideCategories'

const imageUrl = "https://via.placeholder.com/150";

 const DropDownDisplay = (props)=>{

        return (
                 <View style={{paddingHorizontal: 25}}>
                        <View style={styles.wordsImgIcon}>
                            {getComponent(props.word)}
                            <View style={styles.words}>
                                 {/*Is there a space tag*/}
                                <Text style={styles.words}>Part of Speech</Text>
                                {/*Wrap very long text*/}
                                <Text style={styles.words}>Synonyms</Text>
                            </View>
            
                        </View>
        
                        <View>
                            <Text>Example use of word (ex.1)</Text>
                            <Text>Example use of word (ex.2)</Text>
                            <Text>Example use of word (ex.3)</Text>
                        </View>
            </View>
        );
            
}
export default class ExpandableItem extends React.Component{ 

    constructor(){
        super()
        this.state = {
            itemHeight: 60,
            showDropDown: false
        }

        this.showDropDown = this.showDropDown.bind(this);
    }
    static defaultProps = {
        hasDropDown:false
    }

    showDropDown(){
        console.log("Showing drop down details", this.state.showDropDown)
        this.setState( (state)=>{
            return {
                itemHeight: (state.itemHeight==60)?300:60,
                showDropDown:!state.showDropDown}
        })
    }

    render(){
        return (
            <View style={this.props.style, { height:this.state.itemHeight}}>
    
                <View style={styles.visibleSection}> 
                    <TouchableOpacity style={styles.lexTopSubContainer} 
                                      onPress={()=>{this.showDropDown()} }>
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

               { 
                   (this.state.showDropDown) ? 
                    //console.log("this.state.showDropDown dropdown", this.state.showDropDown)
                    <DropDownDisplay word={this.props.englishWord}/>
                   : null
                }
    
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
    },
    wordsImgIcon:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 170,
        height: 170
    }, 
    words:{
        paddingTop: 10,
        flexWrap: 'wrap'
    }, 
    nativeWord:{
        flexWrap:'wrap'
    },
});