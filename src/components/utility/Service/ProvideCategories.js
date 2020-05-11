
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

import { default as Zebra } from '../../../resource/image/Zebra'
import { default as Anatomy } from '../../../resource/image/Anatomy'
import { default as Count } from '../../../resource/image/Count'
import { default as Fashion } from '../../../resource/image/Fashion'
import { default as Grain } from '../../../resource/image/Grain'
import { default as Plant } from '../../../resource/image/Plant'
import { default as Illness } from '../../../resource/image/Illness'
import { default as Day } from '../../../resource/image/Day'
import { default as Locate } from '../../../resource/image/Locate'
import { default as Necklace } from '../../../resource/image/Necklace'
import { default as Organ } from '../../../resource/image/Organ'
import { default as Time } from '../../../resource/image/Time'
import { default as Wild } from '../../../resource/image/Wild'


const getComponent = (name)=>{

    console.log("Svg manager: "+ name)

    switch(name.trim()){
        case 'zebra':
            return <Zebra/>;
        case 'number':
            return <Count/>;
        case 'fashion':
            return <Fashion/>;
        case 'illness':
            return <Illness/>;
        case 'animal':
            return <Wild/>;
        case 'time':
            return <Time/>; 
        case 'plant':
            return <Plant/>;
        case 'locate':
            return <Locate/>;
        case 'grain':
            return <Grain/>;
        case 'anatomy':
            return <Anatomy/>;
        case 'organ':
            return <Organ/>;
        case 'day':
            return <Day/>;
        default : return <Zebra/>; 
    }
}

const lexicon = require('../../../resource/json/lexicons.json');

const imagePath = '/Users/presleymuwan/projects/mobile/react/babankiLexicon/src/resource/image/';

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

export const categories = extractCategories();

export function filterLexicon(category){
    console.log(category);
    filteredLex = lexicon.filter(element => element.label.includes(category) );
    console.log("filteredLex: "+ filteredLex);
    return filteredLex;
}



