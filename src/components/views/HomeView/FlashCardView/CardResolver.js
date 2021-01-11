
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
import CardComposer, {VIEW_TYPES} from './CardComposer';
import { Value } from 'react-native-reanimated';

/**
 * 
 * Each flash card session should have twenty questions 
 * After answering all 20 question ask use if they want another 20
 */
export default class CardResolver extends React.Component{

    constructor(){
        /*props{
            deficulty level, 
        }*/

        /*
            keep track flash card result count [failed / passed]
            show progress bar [20 flash card for each session]
        */
        super();
        this.state = {
            correctAns:null
        }
    
    }

    showNextCard = ()=>{

    }

    showPrevCard=()=>{

    }

    generateQuestion=(questViewType, ansViewType)=>{
        //image-optioned answers will only use text or text audio question view
    }
    validateResponse=(userAns, viewType)=>{

    }
    render(){
        return( <>
                    <Card style={styles.count}>
                        <Text style={{alignSelf:'center', fontSize:20}}>{"1 of 20"}</Text>
                        <Text style={{alignSelf:'center', fontSize:20}}>{"correct: 2"}</Text>
                        <Text style={{alignSelf:'center', fontSize:20}}>{"wrong: 0"}</Text>
                    </Card>
                    
                    <CardComposer 
                        questViewType={VIEW_TYPES.QUEST_VIEW_WITH_IMAGE}
                        ansViewType={VIEW_TYPES.TEXT_ANS_VIEW}
                        question={{text:"here is question for ya?", imageurl:require('../../../../resource/img/rooster.png') }} 
                        answer={ {options:["chicken", "fish", "lion", "house"], correct:[]}}
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