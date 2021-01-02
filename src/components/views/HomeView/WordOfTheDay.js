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
                        <Icon
                            name='volume-up'
                            type='font-awesome'
                            color='black' //color will change when clicked 
                            size={26}
                            onPress={() => console.log('pronounce word')}
                        />

                         {/*Is  {wordOfTheDay.nativeWord} there a space tag*/}
                        <Text style={styles.nativeWord}>{"Native word"}</Text>
                        

                        <Icon
                            name='star'
                            type='font-awesome'
                            color='black' //color will change when clicked
                            size={26}
                            onPress={() => console.log('star fav')}
                        />

                    </View>

                    {/*Wrap {wordOfTheDay.englishWord} very long text*/}
                    <Text style={styles.foriegnWord}>{"Foriegn word"}</Text>
                    
                </View>

                <View style={{paddingHorizontal: 25, flexDirection:'row', justifyContent:'center', marginTop: '10%', marginBottom: '5%'}}>

                    <Text style={{color:'gray',  fontSize:20}} >Ex</Text>
                    <View style= {{borderColor:'black', borderRightWidth: 1, margin: 4}}/>

                    <View>
                        <Text style={{color:'black', fontSize:16, marginBottom: 10}}>Example use of how to use the native word we are looking at in the picture</Text>

                        <Text style={{color:'grey'}} >Example use of how to use the native word we are looking at in the picture</Text>
                    </View>
                    

                </View>
                   

            </Card>
        )
    }
}


const styles = StyleSheet.create({
    wordsImgIcon:{
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    words:{
        paddingTop: 10,
        flexWrap: 'wrap',
        fontSize: 12,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    nativeWord:{
        flexWrap:'wrap',
        fontSize: 15,
        fontWeight:'bold',
        marginTop: 3,
        marginHorizontal: 20
    },
    foriegnWord:{
        flexWrap:'wrap',
        fontSize: 15,
        marginTop: 3,
        marginHorizontal: 20,
        alignSelf: 'center'
    },
    image: {
      width: 250,
      height: 200,
      alignSelf:'center',
      margin: 10
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
