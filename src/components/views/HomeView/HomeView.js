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
        height: '35%'
        //flex: 2
    },
    freqCategories:{
        backgroundColor: 'lightgrey',
        height: '25%',
        paddingTop: '3%'
    },
    lessons:{
        backgroundColor: 'lightgrey',
        height: '45%',
    }
});