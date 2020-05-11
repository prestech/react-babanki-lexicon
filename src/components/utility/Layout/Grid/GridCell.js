import React, {Component} from 'react'
import SvgUri from 'react-native-svg-uri';
import { FlatList,
    View,
    Image,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native'

import { default as Zebra } from '../../../../resource/image/Zebra'

/**
 * TODO
 * Each Grid will have an 'Edit' UI to eidt the name when in edit mode
 * 
 */
export default class GridCell extends React.Component{

    constructor(props){
        super(props);

        this.state={
            isSelected: false,
            imageBlurLevel: 1
        }
        this.props.isInSelectMode = false;
        
        this.selectOrUnSelect = this.selectOrUnSelect.bind(this);
        this.onHandlePress = this.onHandlePress.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){

        if( nextProps.isInSelectMode===false && 
            this.state.isSelected === true){
            this.setState({
                isSelected: false,
                imageBlurLevel: 1
            });
        }
       return true;
    }

    componentDidMount(){
        console.log("Props after mount: "+ this.props.isInSelectMode)
    }
    switchToSelectMode  = ()=>{
        this.props.switchToSelectMode();
        console.log("isInSelectMode: "+this.props.isInSelectMode)
        this.setState( {
          isSelected: true,
          imageBlurLevel: 10
        }, ()=>this.props.addToListOfSelectedItems(this.props.text))
        
    }
    
    selectOrUnSelect(){
        if(this.state.isSelected === false){
            console.log("Select "+this.props.text)
            this.setState( {
                isSelected: true,
                imageBlurLevel: 10
            }, ()=>this.props.addToListOfSelectedItems(this.props.text))
            
        }
        else{
            console.log("Unselect "+this.props.text)
            this.setState( {
                isSelected: false,
                imageBlurLevel: 1
            },()=>this.props.removeFromListOfSelectedItems(this.props.text))
            
        }
    }
  

    onHandlePress(){
        if(this.props.isInSelectMode === true ){
            console.log("onHandlePress: isInSelectMode="+this.props.isInSelectMode)
            this.selectOrUnSelect();
        }else{
            //open cell content
            this.props.onPress(this.props.text);
        }
    }

    render(){

        let defaultCell = (<View style={styles.container}> 
            <TouchableOpacity 
                    onLongPress={(this.props.canSelectItem === true)
                                  ? this.switchToSelectMode
                                  : this.onHandlePress
                                } 
                    onPress={ this.onHandlePress}
            >
               
              <View style={styles.image}>
                    {this.props.imageUri}
              </View>
              
              <Text style={styles.imageTitle} >{this.props.text}</Text>
          </TouchableOpacity>
        </View>);
  
        return defaultCell;
    }
}

const styles = StyleSheet.create({
    container:{
      justifyContent: 'center',
    },
    imageTitle:{
      alignSelf: 'center',
      fontSize: 20,
      fontFamily: 'Cochin'
    },
    image: {
      width: 100,
      height: 100,
      alignSelf:'flex-start',
      margin: 10,
    },
  });