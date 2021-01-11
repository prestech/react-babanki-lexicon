import React, {Component} from 'react'
import {Card} from 'react-native-shadow-cards'
import {Icon, Divider} from 'react-native-elements'
import {
        StyleSheet,
        Text,
        View,
        TouchableOpacity,
        Dimensions,
        Image
        } from 'react-native'
import {getComponent} from '../../../utility/Service/SvgManager'
import { black } from 'color-name'

const imageUrl = "https://via.placeholder.com/150";

const windowHeight = Dimensions.get('window').height;

 const DropDownDisplay = (props)=>{

        return (
                 <Card style={{ marginLeft:'1.5%'}}>
                        <View style={styles.wordsImgIcon}>
                            <Card style={{marginLeft: '5%', marginTop:'2%', marginRight:'2%', height: '100%', width: '50%%'}}>
                                {getComponent(props.lexicon.englishWord)}
                            </Card>

                            <View style={styles.detailView}>
                                 {/*Is there a space tag*/}
                                 <Text style={styles.words}>Ph: {props.lexicon.pronunciation}</Text>
                                 <Text style={styles.words}>Sp: {props.lexicon.partOfSpeech}</Text>
                                 <Text style={styles.words}>Pl: { (props.lexicon.pluralForm)?props.lexicon.pluralForm: "?"}</Text>
                                 <Text style={styles.words}>Var: { (props.lexicon.variant)?props.lexicon.variant: "?"}</Text>
                                {/*Wrap very long text*/}
                            </View>
            
                        </View>

                        <View style={{paddingHorizontal: '2%', flexDirection:'row', justifyContent:'center', marginTop: '5%', marginBottom: '1%'}}>


                            <View>
                                <Divider style={{ backgroundColor: 'grey'}}></Divider>

                                <Text style={{color:'gray', marginVertical:'1%', fontSize:15}}>[Example use]</Text>

                                <Text style={{color:'black', fontSize:16, marginBottom: 10}}>Example use of how to use the native word we are looking at in the picture</Text>

                                <Text style={{color:'grey'}} >Example use of how to use the native word we are looking at in the picture</Text>
                            </View>


                        </View>
            </Card>
        );
            
}
export default class ExpandableItem extends React.Component{ 

    constructor(){
        super()
        this.state = {
            showDropDown: false,
            favStarColor: "black"
        }

        this.showDropDown = this.showDropDown.bind(this);
        this.markAsFavorite = this.markAsFavorite.bind(this);
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

    markAsFavorite(){
        this.setState({
           favStarColor: "orange"
        }) 

        this.props.onLikeIconTouch();
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
                                    color= {this.state.favStarColor}//color will change when clicked
                                    size={26}
                                    onPress={this.markAsFavorite}
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
        margin: '1%',
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
        backgroundColor:'white',
        width: '100%',
        height: windowHeight*0.25
    },
    detailView:{
        paddingTop: '2%',
        justifyContent:'space-evenly'
    }, 
    words:{
        flexWrap: 'wrap',
    }, 
    exampleUse:{
        paddingBottom: '5%',
        marginLeft: '2%'
    },
    exampleUseView:{
        marginTop: '5%'
    },
    nativeWord:{
        flexWrap:'wrap',
        
    },
});