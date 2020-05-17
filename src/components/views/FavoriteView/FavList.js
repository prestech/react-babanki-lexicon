'use-strict'

import React from 'react'

import {
        View,
        Stylesheet
    }from 'react-native';

import {lexicon} from '../../utility/Service/LexiconMananger';

import NavListAdapter from '../../utility/Layout/List/NavListAdapter'

const navData = ["A", "B", "Bv", "Ch", "D", "Dz", "E", "Ə", "Ff", "G", "Gh", 
    "I", "Ɨ", "J", "K", "L", "M", "N", "Ny", "Ŋ", "O", "Pf", 
    "S", "Sh", "T", "Ts", "U", "Ʉ", "V", "W", "Y", "Z", "Zh"]
/**
 * Get data from the database
 *
 * 
 */ 
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

