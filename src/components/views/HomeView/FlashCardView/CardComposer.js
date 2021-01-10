//'use strict'

import React, {useState} from 'react'
import Modal from 'react-native-modal';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
   } from 'react-native'
   import {Card} from 'react-native-shadow-cards'

   import GridAdapter from '../../../utility/Layout/Grid/GridAdapter'

   const imageUrl = "https://via.placeholder.com/150";

   /**
    * Components
    *  -Question View - to house the question
    *  -Answer View - to hold the answers
    *  -Question format:
    *      - Present a text question with picture-base options for answers
    *      - Present an unknow Picture and word options
    * 
    *  Implementation 
    *   - a boolean will determine the type of question to present [picture or word]
    *   - an array will hold the possible answers to the questions 
    *   - users selection will be compared 
    * 
    * Flow: click-on-quiz-level -> get-quiz-data -> init-UI-with-quiz-data -> iterate-and-create-quiz-UI
    * 
    * inputs: 
    *   difficulty (context)
    *   Quiz-Data: will be randamly generated by base on level of difficulty 
    *       
    * 
    *  What do you see?
    *  What do you hear?
    *  What do you read? 
    *  Tap the matching pair
    */
    const TextQuestionView = ()=>{
        const titleText = "What is the question?";

        return <Card style={styles.quest}>
                    <Text style={styles.questText}> {titleText}</Text> 
            </Card> 
    }

    const QuestionViewWithImage = ()=>{
        const titleText = "What is the question?";

        return <Card style={styles.quest}>
                    <View style={styles.quest_img}>
                        <Image  style={styles.image}
                                source={require('../../../../resource/img/rooster.png')}
                                resizeMode='contain'/>
                    </View>
                    <Text style={styles.questText}> {titleText}</Text> 
               </Card> 
    }

    const TextAnswerView = (props) => {
        
        return <View style={[styles.ansView]}> 
                    {props.dataSource.map(element => ( 
                            <Card style={styles.ans}>
                                 <TouchableOpacity style={styles.touchableView}>
                                    <Text key={element}> {element} </Text>
                                 </TouchableOpacity>
                                
                            </Card> ))} 
                </View>
    }

    const AnswerViewMatchWordAndImage = (props) => {
        
        localStyle = StyleSheet.create({
            wordContainer:{
               flex: 1,
               height: '50%',
               width: '100%',
               marginHorizontal: '1%',
               alignSelf:'center'
            },
            imgContainer:{
                flex: 1,
                height: '100%',
                width: '100%',
                marginHorizontal: '1%',
                alignSelf:'center'
             },
            container:{
                flex: 1,
                height: '100%',
                width: '100%',
                flexDirection:'row',
                marginBottom: '1%',
                justifyContent:'space-evenly'
            }
             
        })
        return <View style={styles.ansView}> 
                    {props.dataSource.map(element => ( 
                                <View style={localStyle.container}>

                                    <Card style={localStyle.imgContainer}>
                                        <TouchableOpacity style={styles.touchableView}>
                                            <Image  style={styles.image}
                                                    source={require('../../../../resource/img/rooster.png')}
                                                    resizeMode='contain'/>
                                        </TouchableOpacity>
                                    </Card>
                                    
                                    <Card style={localStyle.wordContainer}>
                                        <TouchableOpacity style={styles.touchableView}> 
                                            <Text key={element}>{element}</Text>
                                        </TouchableOpacity>
                                    </Card>
                                </View> 
                            )
                        )
                    } 
                </View>
    }

    const AnswerViewWithImage = (props) => {
        
        localStyle = StyleSheet.create({
            imgContainer:{
                height: '40%',
                width: '48%',
                marginHorizontal: '1%'
             },
            container:{
                height: '100%',
                width: '100%',
                flex: 1,
                justifyContent:'space-around',
                flexDirection:'column',
                flexWrap: 'wrap',
                backgroundColor: 'white',
            }
             
        })
        return <View style={localStyle.container}> 
                    {props.dataSource.map(element => ( 
                                <Card style={localStyle.imgContainer}>
                                    <TouchableOpacity style={styles.touchableView}>
                                        <Image  style={styles.image}
                                                source={require('../../../../resource/img/rooster.png')}
                                                resizeMode='contain'/>
                                    </TouchableOpacity>
                                    
                                </Card>
                            )
                        )
                    } 
                </View>
    }

    export const VIEW_TYPES = {
        QUEST_VIEW_WITH_IMAGE: 'QUEST_VIEW_WITH_IMAGE',
        TEXT_QUEST_VIEW: 'TEXT_QUEST_VIEW',
        ANS_VIEW_WITH_IMAGE:'ANS_VIEW_WITH_IMAGE',
        ANS_VIEW_MATCH_TEX_IMAGE: 'ANS_VIEW_MATCH_TEX_IMAGE',
        TEXT_ANS_VIEW: 'TEXT_ANS_VIEW'
    }

    resolveQuestionView = (viewType) => {
        if(viewType == VIEW_TYPES.QUEST_VIEW_WITH_IMAGE){
            return QuestionViewWithImage
        }else {
            return TextQuestionView
        }
    }

    resolveAnswerView = (viewType) => {
        if(viewType == VIEW_TYPES.ANS_VIEW_WITH_IMAGE){
            return AnswerViewWithImage
        }else if(viewType == VIEW_TYPES.ANS_VIEW_MATCH_TEX_IMAGE){
            return AnswerViewMatchWordAndImage
        }else {
            return TextAnswerView
        }
    }
    export default class CardComposer extends React.Component{

        constructor(props){
            super(props)
            this.state = {
                isVisible: true
            }

        }
        componentDidMount(){
            console.log("MCQ component mounted")
        }
        render(){
            QuestionView = resolveQuestionView(this.props.questViewType)
            AnswerView = resolveAnswerView(this.props.ansViewType)
            
            return <>
                    <QuestionView/>
                    
                    <AnswerView
                        dataSource={["lion","bird","zebra","basket"]}
                      />
                    </>               
        }
    }


    const styles = StyleSheet.create({
        
        quest:{
            backgroundColor: 'white',
            height: '40%',
            width: '98%',
            margin: '1%',
            alignSelf: "center",
            alignItems:'center',
            justifyContent: "center"            
        },
        quest_img:{
            height: '60%',
            width: '40%',
            backgroundColor:'white'
        },
        questText:{
            fontSize:20
        },
        image: {
            alignSelf:'center',
            width: '100%',
            height: '100%',
        },
        ans:{
            backgroundColor: 'white',
            flex: 1,
            width: '90%',
            marginVertical: 20,
            justifyContent:'center',
            alignSelf:'center',
            alignItems:'center'
        },
        ansView:{
            backgroundColor: 'white',
            flex: 1,
            width: '100%'
        },
        touchableView:{
            height: '100%',
            width: '100%',
            justifyContent:'center',
            alignItems:'center'
        }
    })