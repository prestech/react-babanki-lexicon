
import React from 'react'

/**
 * Fucntion should 
 * -Read the values of the lexicon
 * -For each lexicon instance  
 *      -Extract the labels 
 *      -create a struct instance
 *      -add it to a list/array of categories.
 *      -return the list of categories.  
 */

import * as lexSvg  from '../../../resource/image/index'

export const getComponent = (name)=>{

    console.log("Svg manager: "+ name)

    switch(true){
        case name.includes('zebra'):
            return <lexSvg.Zebra/>;
        case name.includes('number'):
            return <lexSvg.Count/>;
        case name.includes('fashion'):
            return <lexSvg.Fashion/>;
        case name.includes('illness'):
            return <lexSvg.Illness/>;
        case name.includes('animal'):
            return <lexSvg.Wild/>;
        case name.includes('time'):
            return <lexSvg.Time/>; 
        case name.includes('plant'):
            return <lexSvg.Plant/>;
        case name.includes('locate'):
            return <lexSvg.Locate/>;
        case name.includes('grain'):
            return <lexSvg.Grain/>;
        case name.includes('anatomy'):
            return <lexSvg.Anatomy/>;
        case name.includes('organ'):
            return <lexSvg.Organ/>;
        case name.includes('day'):
            return <lexSvg.Day/>;
        case name.includes('bird'):
            return <lexSvg.Bird/>;
        case name.includes('butterfly'):
            return <lexSvg.Butterfly/>;
        case name.includes('dunky'):
            return <lexSvg.Dunky/>;
        case name.includes('elephant'):
            return <lexSvg.Elephant/>;
        case name.includes('fish'):
            return <lexSvg.Fish/>;
        case name.includes('frog'):
            return <lexSvg.Frog/>;
        case name.includes('lung'):
            return <lexSvg.Lungs/>;
        case name.includes('pepper'):
            return <lexSvg.Peppers/>; 
        case name.includes('pig'):
            return <lexSvg.Pig/>;
        case name.includes('potato'):
            return <lexSvg.Locate/>;
        case name.includes('snake'):
            return <lexSvg.Snake/>;
        case name.includes('tiger'):
            return <lexSvg.Tiger/>;
        case name.includes('tree'):
            return <lexSvg.Tree/>;
        case name.includes('day'):
            return <lexSvg.Day/>;
        case name.includes('bird'):
            return <lexSvg.Bird/>;
        case name.includes('butterfly'):
            return <lexSvg.Butterfly/>;
        case name.includes('lion'):
            return <lexSvg.Lion/>;
        case name.includes('necklace'):
            return <lexSvg.Necklace/>;
        default : return <lexSvg.Drawing/>; 
    }
}

const lexicon = require('../../../resource/json/lexicons.json');

 function extractCategories(){
    let categoryList = [];

    //filter categories and remove dupilcate
   lexicon.forEach( element => {
        mLabel = element.label.split(',')[0];

        if( !categoryList.includes(mLabel)){
            categoryList.push(mLabel)
        }
        
    })

    return categoryList.map(element =>  {
            return ({
                text:element.charAt(0).toUpperCase()+element.slice(1),
                imageUri: getComponent(element)
            })
        }
    );
 }


export function filterLexicon(category){
    category = category.toLowerCase();
    filteredLex = lexicon.filter(element => element.label.includes(category));
   
    return filteredLex;
}

export const categories = extractCategories();


