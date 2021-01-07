
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
    validateResponse=(userAns, viewType)=>{

    }
    render(){
        return( <>
                    <View style={{height: '5%', backgroundColor:'grey', justifyContent: 'center'}}>
                        <Text style={{alignSelf:'center', fontSize:20}}>{"12/14"}</Text>
                    </View>
                    
                    <CardComposer 
                        questViewType={VIEW_TYPES.TEXT_QUEST_VIEW}
                        ansViewType={VIEW_TYPES.ANS_VIEW_MATCH_TEX_IMAGE}
                    />
                </>
        )
    }
}