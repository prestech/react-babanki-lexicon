import React from 'react'
import {Icon} from 'react-native-elements'

import {
         View,
         StyleSheet,
         Text,
         Image,
         TouchableOpacity
        } from 'react-native';

const imageUrl = "https://via.placeholder.com/150";

export default class WordOfTheDay extends React.Component{


    constructor(props){
        super(props)
    }

    render(){

        return (
            <View style={this.props.style}>
                <Text style={{alignSelf:'center'}}>Word of the day</Text>
                <View style={styles.wordsImgIcon}>
                    <Image 
                        style={styles.image }
                        source={ {uri:imageUrl} }
                        resizeMode = 'cover'
                    />
                    <View style={styles.words}>
                         {/*Is there a space tag*/}
                        <Text style={styles.words}>Kedjom word</Text>
                        {/*Wrap very long text*/}
                        <Text style={styles.words}>English word</Text>
                    </View>


                    <View style={styles.speakFavContainer}>
                        
                        <TouchableOpacity style={styles.speaker}>
                                <Icon
                                    name='volume-up'
                                    type='font-awesome'
                                    color='black' //color will change when clicked 
                                    size={26}
                                    onPress={() => console.log('pronounce word')}
                                />
                        </TouchableOpacity>  
        
                        <TouchableOpacity style={styles.speaker}>
                                <Icon
                                    name='star'
                                    type='font-awesome'
                                    color='black' //color will change when clicked
                                    size={26}
                                    onPress={() => console.log('star fav')}
                                />
                        </TouchableOpacity>
                            
                    </View>

                </View>

                <View style={{paddingHorizontal: 25}}>
                    <Text>Example use of word (ex.1)</Text>
                    <Text>Example use of word (ex.2)</Text>
                    <Text>Example use of word (ex.3)</Text>
                </View>
                   

            </View>
        )
    }
}


const styles = StyleSheet.create({
    wordsImgIcon:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    words:{
        paddingTop: 10,
        flexWrap: 'wrap'
    },
    nativeWord:{
        flexWrap:'wrap'
    },
    image: {
      width: 170,
      height: 170,
      alignSelf:'flex-start',
      margin: 10,

    }, speakFavContainer:{
        borderWidth: 1,
        marginRight: 1,
        marginBottom: 1,
        width: '15%',
        alignSelf: 'center',
        flexDirection:'row-reverse',
        justifyContent: 'flex-end'
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
