'use strict'

import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
   } from 'react-native'
   import {Card} from 'react-native-shadow-cards'
   
   import {images} from '../../../utility/Service/ImgProvider'

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
    * 
    *    
    */
    const TextQuestionView = (props)=>{
        const titleText = props.content;
        let mstyle = JSON.parse(JSON.stringify(styles.quest))
        mstyle.height='20%'

        return <Card style={mstyle}>
                    <Text style={styles.questText}> {titleText}</Text> 
            </Card> 
    }

    /**
     * input: props.content[question, imageurl]
     */
    const QuestionViewWithImage = (props)=>{
        const titleText = props.content.text;
        imageurl = props.content.imageurl
        return <Card style={styles.quest}>
                    <View style={styles.quest_img}>
                        <Image  style={styles.image}
                                source={imageurl}
                                resizeMode='contain'/>
                    </View>
                    <Text style={styles.questText}> {titleText}</Text> 
               </Card> 
    }

    const TextAnswerView = (props) => {

        let hightlightAns = (showResult, results, ansOption) => {
            
            console.log("hightlightAns: "+showResult)
            console.log("hightlightAns results: "+results)
            if(showResult == false || results == null){
                return styles.ans
            }
            console.log("Tyep style: "+ (Object.values(results)))

            let mstyle = JSON.parse(JSON.stringify(styles.ans))
            
            if(results.isCorrect == true && results.correctAns == ansOption){
                mstyle.borderWidth = 2
                mstyle.borderColor = '#98fb98'
                return mstyle
            }else if (results.isCorrect == true) return mstyle;

            if(results.isCorrect == false && results.selectedAns == ansOption){   
                mstyle.borderWidth = 1
                mstyle.borderColor = 'red'
            }else if (results.correctAns == ansOption){
                mstyle.borderWidth = 2
                mstyle.borderColor = '#98fb98'
            }

            return mstyle
        }//hightlightAns Ends 

        options = props.content
                   
       
        return <View style={[styles.ansView]}> 
                    {options.map(element => ( 
                            <Card key={element} style={hightlightAns(props.showResult, props.result, element)}>
                                 <TouchableOpacity 
                                     style={styles.touchableView}
                                     onPress={ ()=>{
                                        props.onAswer(VIEW_TYPES.TEXT_ANS_VIEW, element)}
                                     }
                                     >
                                     
                                    <Text> {element} </Text>
                                 </TouchableOpacity>
                                
                            </Card> ))} 
                </View>
    }//TextAnswerView Ends

    const AnswerCell = (props) => {
        const [borderWidth, setBorderWith] = useState(0)
        let mStyle = JSON.parse(JSON.stringify(props.style))
        mStyle.borderWidth = borderWidth
        mStyle.borderColor = props.borderColor

        const hightlightCell=()=>{
            
            if(props.nextColumn ==  props.column || props.nextColumn==""){
                
                new Promise( (resolve) => {

                                if(borderWidth==0){
                                    setBorderWith(2)
                                    resolve("select")
                                }else if(props.nextColumn==""){
                                    setBorderWith(0)
                                    resolve("unselect")
                                }
                                
                            }).then((action)=>{
                                props.parentCallBack(props.cellKey, mStyle.borderColor, props.column, action)
                            })
            }
        }   
       
     
        return <Card style={mStyle}>
                <TouchableOpacity style={styles.touchableView}
                    onPress={ ()=>{
                        //props.onSelect(element.img, "left")
                        hightlightCell()
                    }}>
                    {props.childView}
                </TouchableOpacity>
            </Card>
    }
    
    /**
     * Implement unselect function
     * Ensure that there is not img-to-img or text-to-txt mapping 
     * (on element on the left must be mapped to one on the right and vice verser)
     * 
     * @param {} props 
     */
    const AnswerViewMatchWordAndImage = (props) => {
        
        let localStyle = StyleSheet.create({
            element:{
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

        const [selectedWord, setSelectWord] = useState([])
        const [touchCount, setTouchCount] = useState(0)
        const [nextColor, setNextColor] = useState(0)
        const [nextColumn, setNextColumn] = useState("") //ensure that items are select from oposite columns

        const colors = ["yellow", "green", "blue", "pink"]
        const leftCol = "LEFT"
        const rightCol = "RIGHT"

        const onSelect = (key, color, column, action) =>{

            console.log("My Action "+ action)
            if(colorIsUsed(color) == true && nextColumn != ""){
                return 
            }
            //if item is already matched, should we undo the matching?
            if(action == "select"){

                let result = cellIsMatched(color)
                if(result == true){
                    setNextColumn("")
                }else{
                    //TODO: figure out nextColum situation
                    setNextColumn( ((column == leftCol)? rightCol: leftCol) )
                }
                
                setTouchCount(touchCount+1)
                console.log("Onselect triggered by "+ key)
                let tempMatched = JSON.parse(JSON.stringify(selectedWord))
                tempMatched.push(key+"_"+color)
                setSelectWord([tempMatched] )
                console.log("activeColor values "+tempMatched)
            }else{
                console.log("Unselecting " )
                setTouchCount(touchCount-1)
                setNextColumn(column)
                //remove key from selectWord
                removeSelectedCell(key)
            }
            //
        }
        
        useEffect( () => {
            console.log("activeColor values "+selectedWord)
        }, [selectedWord] )

        useEffect( () => {
            //console.log("Touch count "+ touchCount)
            if(touchCount%2 == 0 && touchCount != 0){
                setNextColor(nextUnusedColor())
            } 
        }, [touchCount] )

        useEffect( () => {
            console.log("NEXT COLOR: "+nextColor)
        }, [nextColor] )


        let highlight = (itemData)=>{

            let selected = JSON.parse(JSON.stringify(selectedWord)).toString().split(",")
            if(selected.length > 0){
                //highlight already selected cells with their existing colors
                for ( let i in selected ){
                    //console.log(selected[i] + " Looking "+ i)
                    let parts = selected[i].split("_")
                    if(parts[0] == itemData){
                        //console.log("Found "+ itemData + " with color ")
                        return parts[1]
                    }
                }
                //check if color is undefined. 
                //check for unsed colors and set NextColor to its index
                return  colors[nextUnusedColor()]
            } 
            return colors[nextColor] 
        }

        const nextUnusedColor = () => {
           
            for(let c in colors){
                    if(isLookingForMatch(colors[c]) == true){
                        return c
                    }
                    else if(colorIsUsed(colors[c]) == false){
                        return  c
                    }
            }
        }
        
        const removeSelectedCell = (cellKey)=>{
            let selected = JSON.parse(JSON.stringify(selectedWord)).toString().split(",")
            
            let filterdResult = selected.filter( item => {
                                let parts = item.split("_")
                                //console.log(cellKey+ " Attempting to remove "+ parts[0])
                                return (parts[0] != cellKey)
                            })
            setSelectWord([JSON.parse(JSON.stringify(filterdResult))])
        } 
         
        const cellIsMatched = (color) => {
            let selected = JSON.parse(JSON.stringify(selectedWord)).toString().split(",")
            let key = "_"+color
            
            let result = selected.find(value => {
                //console.log("Looking in "+ value)
                return value.includes(key)
            });
            return (result != null)
        }

        const colorIsUsed = (color) => {
            let selected = JSON.parse(JSON.stringify(selectedWord)).toString().split(",")
            let key = "_"+color
            
            let result = selected.filter(value => {
                return value.includes(key)
            });
            return (result.length==2)
        }

        const isLookingForMatch = (color) => {
            let selected = JSON.parse(JSON.stringify(selectedWord)).toString().split(",")
            let key = "_"+color
            
            let result = selected.filter(value => {
                return value.includes(key)
            });
            return (result.length==1)
        }

        return <View style={styles.ansView}> 
                    {props.content.map( (element, index)=> {
                        const leftElement = (<Image  style={styles.image}
                                                source={images[element.img]}
                                                resizeMode='contain'/>)
                        const rightElement = (<Text>{element.text}</Text>)
                        
                        return ( 
                                <View key={index} style={localStyle.container}>
                                    
                        
                                    <AnswerCell
                                        borderColor={highlight("img:"+element.img)}
                                        cellKey={("img:"+element.img)}
                                        style={localStyle.element}
                                        childView={leftElement}
                                        column={leftCol}
                                        nextColumn={nextColumn}
                                        parentCallBack={onSelect}
                                    />
                                    <AnswerCell
                                        borderColor={highlight("text:"+element.text)}
                                        cellKey={("text:"+element.text)}
                                        style={localStyle.element}
                                        childView={rightElement}
                                        column={rightCol}
                                        nextColumn={nextColumn}
                                        parentCallBack={onSelect}
                                    />

                                </View> 
                            )}
                        )
                    } 
                </View>
    }

    const AnswerViewWithImage = (props) => {
        
        let localStyle = StyleSheet.create({
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
                    {props.content.map(element => ( 
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
        ANS_VIEW_MATCH_TEXT_IMAGE: 'ANS_VIEW_MATCH_TEXT_IMAGE',
        TEXT_ANS_VIEW: 'TEXT_ANS_VIEW'
    }

    const resolveQuestionView = (viewType) => {
        if(viewType == VIEW_TYPES.QUEST_VIEW_WITH_IMAGE){
            return QuestionViewWithImage
        }else {
            return TextQuestionView
        }
    }

    const resolveAnswerView = (viewType) => {
        if(viewType == VIEW_TYPES.ANS_VIEW_WITH_IMAGE){
            return AnswerViewWithImage
        }else if(viewType == VIEW_TYPES.ANS_VIEW_MATCH_TEXT_IMAGE){
            return AnswerViewMatchWordAndImage
        }else {
            return TextAnswerView
        }
    }
    export default class CardComponent extends React.Component{

        constructor(props){
            super(props)
            this.state = {
                isVisible: true,
                content: {}
            }

        }
        componentDidMount(){
            console.log("MCQ component mounted")
        }
        render(){
            const QuestionView = resolveQuestionView(this.props.questViewType)
            const AnswerView = resolveAnswerView(this.props.ansViewType)
            
            return <>
                    <QuestionView
                        content={this.props.question}
                    />
                    
                    <AnswerView
                        content={this.props.answer}
                        onAswer={this.props.onAswer}
                        showResult={this.props.showResult}
                        result={this.props.result}
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