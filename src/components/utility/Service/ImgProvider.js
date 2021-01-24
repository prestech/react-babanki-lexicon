import * as React from 'react'
import {Image, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
     
    tinyLogo: {
      flex: 1,
      alignSelf:'stretch',
      width: undefined,
      height: undefined,
    }
  });

export const getComponent = (name)=>{

    console.log("Svg manager: "+ name)

    switch(true){
        default : return <Image style={styles.tinyLogo}
                                source={require('../../../resource/img/rooster.png')}
                                resizeMode='contain'/>; 
    }
}



export const images = {
  'rooster':require('../../../resource/img/rooster.png'),
  'cloud':require('../../../resource/img/cloud.png'),
  'elbow':require('../../../resource/img/elbow.png'),
  'lion':require('../../../resource/img/lion.png')

}


