
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
import { colors } from 'react-native-elements';

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
            lexiconContext:sampleLexicon(),
            isNativeWord: true,
            showResult: false,
            result: null,
            correctCount:0,
            wrongCount:0,
            quizCount:0
        }

        this.onAnswer = this.onAnswer.bind(this)
        this.getExpectResult = this.getExpectResult.bind(this)
    }

    onAnswer(ANS_VIEW_TYPE, SELECTED_DATA){

        /**
         * validate selection 
         *  provide feedback based on selection
         *  highlight the correct answer green and wrong answer red.
         *  update the counts  
        */
        result=this.respondToSelection(ANS_VIEW_TYPE, SELECTED_DATA)

        console.log(result+": SELECTED_DATA: "+ SELECTED_DATA, " CORRECT_ANS: "+ this.getExpectResult())

        this.setState(()=>({
            result : {isCorrect: result, selectedAns: SELECTED_DATA, correctAns: this.getExpectResult() }       
        }), ()=>{
            this.setState( (state)=>({
                    showResult:true,
                    quizCount: state.quizCount+1
                }) )

            if(result == true){
                this.setState((state)=>({
                    correctCount: state.correctCount+1
                }) )
            }else{
                this.setState((state)=>({
                    wrongCount: state.wrongCount+1
                }) )
            }
        })

        /**
         * Inform user to tap screen and then generate next question
            -set result to null and showResult to false
        */
        setTimeout( ()=>{
        
            newLexiconContext=sampleLexicon()
        
            console.log("Next question: "+newLexiconContext.englishWord)
            this.setState({ result:null, 
                            showResult:false,
                            lexiconContext:newLexiconContext })
            
        }, 3000)
        
    }

    respondToSelection(ANS_VIEW_TYPE, selectedData ){
    
        switch(ANS_VIEW_TYPE){
    
            case VIEW_TYPES.TEXT_ANS_VIEW:
                return (selectedData == this.getExpectResult())
            
            case VIEW_TYPES.ANS_VIEW_WITH_IMAGE:

                break 
        }
    }

    //isNativeWord should be a state value
    getExpectResult(){
        if(this.state.isNativeWord == true){
            return this.state.lexiconContext.kejomWord
        }else{
            return this.state.lexiconContext.englishWord
        }
    }

    generateQuestion=(questViewType, ansViewType)=>{
        //image-optioned answers will only use text or text audio question view
    }
    validateResponse=(userAns, viewType)=>{

    }
    render(){
        
        correctAnswer=this.getExpectResult()
        console.log(this.state.showResult)

        return( <>  
                    {/** flash card stats ui: keeps count of correct ans, wrong ans, and total nunmber of flash cards parsed*/}
                    <Card style={styles.count}>
                        <Text style={{alignSelf:'center', fontSize:20}}>{ this.state.quizCount + " of 20"}</Text>
                        <Text style={{alignSelf:'center', fontSize:20}}>{"correct: "+this.state.correctCount}</Text>
                        <Text style={{alignSelf:'center', fontSize:20}}>{"wrong: "+this.state.wrongCount}</Text>
                    </Card>
                    
                    <CardComponent 
                        questViewType={VIEW_TYPES.TEXT_QUEST_VIEW}
                        ansViewType={VIEW_TYPES.ANS_VIEW_MATCH_TEXT_IMAGE}
                        //question={{text:"Select '"+this.state.lexiconContext.englishWord+"'", imageurl:require('../../../../resource/img/rooster.png') }} 
                        question={"Select '"+this.state.lexiconContext.englishWord+"'"} 
                        //answer={["cloud","rooster","rooster","cloud","lion"]}
                        answer={[{img:"cloud", text:"elbow"},{img:"rooster", text:"rooster"} , {img:"lion", text:"cloud"},  {img:"elbow", text:"lion"}]}
                        onAswer={this.onAnswer}
                        showResult={this.state.showResult}
                        result={this.state.result}
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