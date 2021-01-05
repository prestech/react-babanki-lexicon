import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet
   } from 'react-native'
   

import FreqCategories from './FreqCategories';
import WordOfTheDay from './WordOfTheDay';
import Personalized from './personalizedUpdates';
import FlashCard from './FlashCardView/FlashCards';

import { ScrollView } from 'react-native-gesture-handler';


export default class HomeView extends React.Component{

    constructor(props){
        super(props)
    }


    render(){

       return(
         <SafeAreaView>
             <ScrollView> 
                <WordOfTheDay
                    style={styles.wordOfTheDay}
                    navigation={this.props.navigation}
                />
               
               {/*<Personalized
                    style={styles.wordOfTheDay}
                    navigation={this.props.navigation}
               />*/}

                <FlashCard
                    style={styles.flashCard}
                    navigation={this.props.navigation}
                />
              
                <FreqCategories
                    style={styles.freqCategories}
                    navigation={this.props.navigation}
                />
            </ScrollView>
         </SafeAreaView>
       );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    wordOfTheDay:{
        backgroundColor: 'white',
        alignSelf:'center',
        marginBottom: '2%'
        //flex: 2
    },
    freqCategories:{
        backgroundColor: 'lightgrey',
        alignSelf: 'center'

    },
    flashCard:{
        backgroundColor: 'lightgrey',
        marginBottom: '3%',
        alignSelf:'center',
    },
    lessons:{
        backgroundColor: 'lightgrey',
        marginBottom: '3%'
    }
});