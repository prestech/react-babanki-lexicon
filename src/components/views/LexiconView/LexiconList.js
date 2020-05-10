'use-strict'

import React from 'react'

import {
        View,
        Stylesheet
    }from 'react-native';

import NavListAdapter from '../../utility/Layout/List/NavListAdapter'

import {filterLexicon} from '../../utility/Service/ProvideCategories'; 

//place holder data
//const lexicon = filterLexicon("locate");

//place holder data 
const navData = ["A", "B", "Bv", "Ch", "D", "Dz", "E", "Ə", "Ff", "G", "Gh", 
    "I", "Ɨ", "J", "K", "L", "M", "N", "Ny", "Ŋ", "O", "Pf", 
    "S", "Sh", "T", "Ts", "U", "Ʉ", "V", "W", "Y", "Z", "Zh"]

export default class LexiconList extends React.Component{
    
    constructor(props){
        super(props)
    }
    render(){
        const {category} = this.props.route.params;

        console.log("selected category: " + category);

        return(
            <>
              < NavListAdapter
                    navData = {navData}
                    data = {filterLexicon(category)}
                    onLikeIconTouch={
                        //check if its already in favorites. If so, remove
                        ()=>  this.props.navigation.navigate("AddFavView")}
                    onSpeakerIconTouch={ ()=>{
                    }}
                />
            </>
        )
    }
}

