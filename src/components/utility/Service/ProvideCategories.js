
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

import {getComponent} from './SvgManager'; //when importing function wrap them in {}

import {lexicon} from './LexiconMananger';

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
                displayObj: getComponent(element),
                showTitle: true
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


