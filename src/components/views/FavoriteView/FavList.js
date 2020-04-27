'use-strict'

import React from 'react'

import {
        View,
        Stylesheet
    }from 'react-native';

import NavListAdapter from '../../utility/Layout/List/NavListAdapter'

//place holder data
const lexicon = require('../../../resource/json/lexicons.json');
//place holder data 
const navData = ["A", "B", "Bv", "Ch", "D", "Dz", "E", "Ə", "Ff", "G", "Gh", 
    "I", "Ɨ", "J", "K", "L", "M", "N", "Ny", "Ŋ", "O", "Pf", 
    "S", "Sh", "T", "Ts", "U", "Ʉ", "V", "W", "Y", "Z", "Zh"]

export default class FavList extends React.Component{
    
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
              < NavListAdapter
                    navData = {navData}
                    data = {lexicon}
                    onLikeIconTouch={this.props.onLikeIconTouch}
                    onSpeakerIconTouch={this.props.onSpeakerIconTouch}
                />
            </>
        )
    }
}

