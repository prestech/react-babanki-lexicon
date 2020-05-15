import React from 'react'
import {Icon} from 'react-native-elements'

import {
         View,
         StyleSheet,
         Text,
         Image,
         TouchableOpacity
        } from 'react-native';

import {Card} from 'react-native-shadow-cards'

import {getWordOfTheDay} from '../../utility/Service/LexiconMananger'

const imageUrl = "https://via.placeholder.com/150";

export default class WordOfTheDay extends React.Component{


    constructor(props){
        super(props)
    }

    render(){
        wordOfTheDay = getWordOfTheDay();
        return (
            <Card style={this.props.style}>
                <Text style={{alignSelf:'center', fontSize:20, fontFamily:'cochin'}}>Word of the day</Text>
                <View style={styles.wordsImgIcon}>
                    <Image 
                        style={styles.image }
                        source={ {uri:imageUrl} }
                        resizeMode = 'cover'
                    />
                    <View style={styles.words}>
                         {/*Is there a space tag*/}
                        <Text style={styles.words}>{wordOfTheDay.nativeWord}</Text>
                        {/*Wrap very long text*/}
                        <Text style={styles.words}>{wordOfTheDay.englishWord}</Text>
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
                    <Text>(ex.1)</Text>
                    <Text>(ex.2)</Text>
                    <Text>(ex.3)</Text>
                </View>
                   

            </Card>
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
        flexWrap: 'wrap',
        fontSize: 12
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
