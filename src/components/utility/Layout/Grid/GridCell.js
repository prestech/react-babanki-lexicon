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

import {Card} from 'react-native-shadow-cards'

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
        }, ()=>this.props.addToListOfSelectedItems(this.props.item.text))
        
    }
    
    selectOrUnSelect(){
        if(this.state.isSelected === false){
            console.log("Select "+this.props.item.text)
            this.setState( {
                isSelected: true,
                imageBlurLevel: 10
            }, ()=>this.props.addToListOfSelectedItems(this.props.item.text))
            
        }
        else{
            console.log("Unselect "+this.props.item.text)
            this.setState( {
                isSelected: false,
                imageBlurLevel: 1
            },()=>this.props.removeFromListOfSelectedItems(this.props.item.text))
            
        }
    }
  

    onHandlePress(){
        if(this.props.isInSelectMode === true ){
            console.log("onHandlePress: isInSelectMode="+this.props.isInSelectMode)
            this.selectOrUnSelect();
        }else{
            //open cell content
            this.props.onPress(this.props.item.text);
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
               
              <Card style={styles.cardView}>
                    {this.props.item.displayObj}
              </Card>
              {(this.props.item.showTitle) ?<Text style={{alignSelf:'center'}}>{this.props.item.text}</Text>:null} 
          </TouchableOpacity>
        </View>);
  
        return defaultCell;
    }
}

const styles = StyleSheet.create({
    container:{
      justifyContent: 'center',
    },
    cardTitle:{
      alignSelf: 'center',
      fontSize: 20,
      fontFamily: 'Cochin'
    },
    cardView: {
      width: 100,
      height: 100,
      alignSelf:'flex-start',
      justifyContent:'center',
      margin: 10,
    },
  });