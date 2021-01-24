
import React, {useState} from 'react'
import Modal from 'react-native-modal';
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    Dimensions
   } from 'react-native'
import {Card} from 'react-native-shadow-cards'
import CardComponent, {VIEW_TYPES} from './CardComponent';
import { Value } from 'react-native-reanimated';
import {sampleLexicon} from '../../../utility/Service/LexiconMananger'

/**
 * Functions of the Card Resolver
 *  - Call the lexicon service to get question set, with the following inputs
 *      - Deficulty Level [Easy, Intermediate, or Hard]
 *  - Rules for selecting card components (after the lexicon service provide the data need - words [based on the level provided])
 *    * Card components selection are primarily based on the Difficulty Level
 *
 *  - Card Component configurations 
 * 
 *     A - question_with_image and answer_with_words 
 *     B - question_with word and answer_with_words
 *     C - question_with_word and answer_with_image 
 *     D - question_with_voice and answer_with_word  
 *     E - Match_image_to_words
 *     E - Match_native_words_to_english_words
 *      
 * Each flash card session should have twenty questions 
 * After answering all 20 question ask use if they want another 20
 */
export default class CardResolver extends React.Component{

    constructor(props){
        /*props{
            deficulty level, 
        }*/

        /*
            keep track flash card result count [failed / passed]
            show progress bar [20 flash card for each session]
        */
        super(props);
        this.state = {
            lexiconContext:sampleLexicon()
        }

        this.onAnswer = this.onAnswer.bind(this)
    }

    onAnswer(selectType, answer){

        //validate selection 
        console.log("validate selection")

        /**
         * provide feedback based on selection
         * highlight the correct answer green and wrong answer red.
         * update the counts  
        */
        console.log("provide selection feedback")


        /**
         * Inform user to tap screen and then generate next question
         */ 
         
        newLexiconContext=sampleLexicon()
        console.log("Next question: "+newLexiconContext.englishWord)
        console.log("Answer "+answer)
        
        this.setState(()=>{
            lexiconContext = newLexiconContext
            return lexiconContext
        })
    }

    generateQuestion=(questViewType, ansViewType)=>{
        //image-optioned answers will only use text or text audio question view
    }
    validateResponse=(userAns, viewType)=>{

    }
    render(){
        
        console.log(lexiconContext.kejomWord)
        return( <>  
                    {/** flash card stats ui: keeps count of correct ans, wrong ans, and total nunmber of flash cards parsed*/}
                    <Card style={styles.count}>
                        <Text style={{alignSelf:'center', fontSize:20}}>{"1 of 20"}</Text>
                        <Text style={{alignSelf:'center', fontSize:20}}>{"correct: 2"}</Text>
                        <Text style={{alignSelf:'center', fontSize:20}}>{"wrong: 0"}</Text>
                    </Card>
                    
                    <CardComponent 
                        questViewType={VIEW_TYPES.QUEST_VIEW_WITH_IMAGE}
                        ansViewType={VIEW_TYPES.TEXT_ANS_VIEW}
                        question={{text:"Select '"+lexiconContext.englishWord+"'", imageurl:require('../../../../resource/img/rooster.png') }} 
                        answer={ {options:["chicken", "fish", lexiconContext.kejomWord, "house"], correct:[]}}
                        onAswer={this.onAnswer}
                    />
                </>
        )
    }
}


const styles = StyleSheet.create({

    count:{
        height: '5%', 
        width: '98%',
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop:'1%'
        
    }
    

})