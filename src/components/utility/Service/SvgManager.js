import * as React from 'react'
import { default as Zebra } from '../../../resource/image/Zebra'
import { default as Anatomy } from '../../../resource/image/Anatomy'
import { default as Dice } from '../../../resource/image/Dice'
import { default as Fashion } from '../../../resource/image/Fashion'
import { default as Grain } from '../../../resource/image/Grain'
import { default as Hipo } from '../../../resource/image/Hipo'
import { default as Illness } from '../../../resource/image/Illness'
import { default as Lion } from '../../../resource/image/Lion'
import { default as Locate } from '../../../resource/image/Locate'
import { default as Necklace } from '../../../resource/image/Necklace'
import { default as Organ } from '../../../resource/image/Organ'
import { default as Time } from '../../../resource/image/Time'
import { default as Wild } from '../../../resource/image/Wild'


const getComponent = (name)=>{

    switch(name){
        case 'zebra':
            return <Zebra/>;
        case 'count':
            return <Count/>;
        case 'fashion':
            return <Fashion/>;
        case 'illness':
            return <Illness/>;
        case 'wild':
            return <Wild/>;
        case 'time':
            return <Time/>; 
        case 'necklace':
            return <Necklace/>;
        case 'locate':
            return <Locate/>;
        case 'grain':
            return <Grain/>;
        case 'anatomy':
            return <Anatomy/>;
        case 'orgain':
            return <Organ/>;
        default : return <SvgZebra/>; 
    }
}

export default getComponent
