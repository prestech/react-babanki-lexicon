import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet
   } from 'react-native'
   

import FreqCategories from './FreqCategories';
import WordOfTheDay from './WordOfTheDay';
import Lessons from './Lessons';
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
                />

                <Lessons
                    style={styles.lessons}
                />

                <FlashCard
                    style={styles.flashCard}
                />
              
                <FreqCategories
                    style={styles.freqCategories}
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