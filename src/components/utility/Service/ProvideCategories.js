

/**
 * Fucntion should 
 * -Read the values of the lexicon
 * -For each lexicon instance  
 *      -Extract the labels 
 *      -create a struct instance
 *      -add it to a list/array of categories.
 *      -return the list of categories.  
 */
const lexicon = require('../../../resource/json/lexicons.json');

const imagePath = '/Users/presleymuwan/projects/mobile/react/babankiLexicon/src/resource/image/';

 function extractCategories(){
    let categoryList = [];

    //filter categories and remove dupilcate
   lexicon.forEach( element => {
        mLabel = [];
        mLabel = element.label.split(',');

        mLabel.forEach( element => {
            if( !categoryList.includes(element)){
                categoryList.push(element)
            }
        })
        
    })

    return categoryList.map(element =>  {
            return ({
                text:element,
                imageUri:imagePath+element+'.png'
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