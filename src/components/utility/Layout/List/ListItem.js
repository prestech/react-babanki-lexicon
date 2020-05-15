import React, {Component} from 'react'
import {Card} from 'react-native-shadow-cards'
import {Icon, Divider} from 'react-native-elements'
import {
        StyleSheet,
        Text,
        View,
        TouchableOpacity,
        Image
        } from 'react-native'

import {getComponent} from '../../../utility/Service/SvgManager'

const imageUrl = "https://via.placeholder.com/150";

 const DropDownDisplay = (props)=>{

        return (
                 <Card style={{ marginLeft:'1.5%'}}>
                        <View style={styles.wordsImgIcon}>
                            {getComponent(props.lexicon.englishWord)}
                            <View style={styles.detailView}>
                                 {/*Is there a space tag*/}
                                 <Text style={styles.words}>Phonetic: {props.lexicon.pronunciation}</Text>
                                 <Text style={styles.words}>Sp: {props.lexicon.partOfSpeech}</Text>
                                 <Text style={styles.words}>Pl: { (props.lexicon.pluralForm)?props.lexicon.pluralForm: "?"}</Text>
                                 <Text style={styles.words}>Var: { (props.lexicon.variant)?props.lexicon.variant: "?"}</Text>
                                {/*Wrap very long text*/}
                            </View>
            
                        </View>

                        <View style={styles.exampleUseView}>
                            <Text style={styles.exampleUse}>Ex1</Text>
                            <Text style={styles.exampleUse}>Ex2</Text>
                            <Text style={styles.exampleUse}>Exn..</Text>
                        </View>
            </Card>
        );
            
}
export default class ExpandableItem extends React.Component{ 

    constructor(){
        super()
        this.state = {
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
                showDropDown:!state.showDropDown}
        })
    }

    render(){
        return (
            <>
                <Card style={styles.visibleSection}> 
                    <TouchableOpacity style={styles.lexTopSubContainer} 
                                      onPress={()=>{this.showDropDown()} }>
                            <Text style={styles.lexItemWordContainer, {fontWeight:'bold'}} >
                                    {this.props.lexicon.nativeWord}
                            </Text>
                            <Divider style={{ backgroundColor: 'grey'}}></Divider>
                            <Text style={styles.lexItemWordContainer} >
                                    {this.props.lexicon.englishWord}
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
                    
               </Card>

               { 
                   (this.state.showDropDown) ? 
                    //console.log("this.state.showDropDown dropdown", this.state.showDropDown)
                    <DropDownDisplay lexicon={this.props.lexicon}/>
                   : null
                }
    
            </>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        margin: 4,

    },
    visibleSection:{
        margin: 4,
        flexDirection: 'row',
    },
    expandableSection:{
        //borderWidth: 1, 
        overflow:'hidden', 
        backgroundColor: '#FF33'
    },
    lexTopSubContainer:{
        //borderWidth: 1,
        marginRight: 1,
        marginBottom: 2,
        marginTop: 2,
        width: '75%'

    },
    lexItemWordContainer:{
        paddingTop: '2%',
        marginLeft: '2.5%',
        marginBottom: '1%',
        fontSize: 18,
        fontFamily: 'Cochin'
    },
    speakFavContainer:{
        //borderWidth: 1,
        marginRight: 1,
        marginBottom: 1,
        width: '25%',
        flexDirection: 'row',

    },
    speaker:{
        //borderWidth: 1,
        marginRight: 1,
        width: '50%',
    },
    favorite:{
        //borderWidth: 1,
        marginRight: 1,
        width: '50%',
    },
    wordsImgIcon:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 170,
        height: 170
    },
    detailView:{
        paddingTop: '20%'
    }, 
    words:{
        flexWrap: 'wrap',
        paddingBottom: '10%'
    }, 
    exampleUse:{
        paddingBottom: '5%',
        marginLeft: '2%'
    },
    exampleUseView:{
        marginTop: '2%'
    },
    nativeWord:{
        flexWrap:'wrap',
        
    },
});