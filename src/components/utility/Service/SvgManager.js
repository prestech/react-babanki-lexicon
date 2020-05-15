import * as React from 'react'
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
