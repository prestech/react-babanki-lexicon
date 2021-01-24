/**
 * Data clean up task needed 
 *  - Make the english word field an array 
 *  - tag data with level of difficulty 
 *  - Categorize images 
 *  - Remove white space characters arround words 
 *  - Remove "n1\2" from words
 * 
 */
export const lexicon = require('../../../resource/json/lexicons.json');

export const getWordOfTheDay = ()=>{
    randomNum = 1;
    return lexicon[randomNum]
}

export const sampleLexicon = (difficultyLevel, category, qtty, haveImage ) =>{

    //filter lexicon based on difficultylevel

    //filter lexicon based on category (from the result above)

    //filter based on image 

    //sample out a few based on qtty

    randomNum = Math.floor(Math.random() * 20);
    //console.log(lexicon[randomNum])
    return lexicon[randomNum]
}