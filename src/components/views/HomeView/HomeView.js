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


export default class HomeView extends React.Component{

    constructor(props){
        super(props)
    }


    render(){

       return(
         <SafeAreaView>
            <WordOfTheDay
                style={styles.wordOfTheDay}
            />
            <Lessons
                style={styles.lessons}
            />
             <FreqCategories
                style={styles.freqCategories}
            />
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
        height: '35%'
        //flex: 2
    },
    freqCategories:{
        backgroundColor: 'lightgrey',
        height: '25%',
        //flex: 1
    },
    lessons:{
        backgroundColor: 'lightgrey',
        height: '40%',
        marginTop: '3%',
        marginBottom: '3%'
    }
});