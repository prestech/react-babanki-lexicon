
export const lexicon = require('../../../resource/json/lexicons.json');

export const getWordOfTheDay = ()=>{

    randomNum = 1;
    return lexicon[randomNum]
}