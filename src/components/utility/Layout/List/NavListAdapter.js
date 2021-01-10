import React, {Component} from 'react'; 
import {
            FlatList,
            SafeAreaView,
            View,
            Text,
            StyleSheet
        }from 'react-native'

import ListAdapter from './ListAdapter'
import {Divider} from 'react-native-elements'

import ExpandableItem from './ListItem'
import { Card } from 'react-native-shadow-cards';

/**
 *  -------Example-----------
    const lexicon = require('../../../../resource/json/lexicons.json');

    const navData = ["A", "B", "Bv", "Ch", "D", "Dz", "E", "Ə", "Ff", "G", "Gh", 
                      "I", "Ɨ", "J", "K", "L", "M", "N", "Ny", "Ŋ", "O", "Pf", 
                      "S", "Sh", "T", "Ts", "U", "Ʉ", "V", "W", "Y", "Z", "Zh"]
 *1  <NavListAdapter
        navData = {navData}
        data = {lexicon}
    />
 *   
 */
export default class NavListAdapter extends React.Component{

    constructor(props){
        super(props);
        this.state={
            navData:[]
        }
    

        this.setMainListView = this.setMainListView.bind(this);
        this.setNavView = this.setNavView.bind(this);
        this.extractMainListKey = this.extractMainListKey.bind(this);
        this.extractNavListKey = this.extractNavListKey.bind(this);
        
    }
    /***
     * Folllowup: Why won't lexicon return 
     * setLexiconListData(){
        console.log("Set lexicon data");
        return {lexicon};
       }
    */
    componentDidMount(){
        this.setState({
        });
    }
    setMainListView(item){
      return(  <ExpandableItem
                 lexicon={item}
                 onSpeakerIconTouch={this.props.onSpeakerIconTouch}
                 onLikeIconTouch={this.props.onLikeIconTouch}
                />
            )
    }

    extractMainListKey(item){
        return item.lexiconId;
    }


    setNavView(item){
      return <>
                <Text style={styles.navText}>{item}</Text>
                <Divider style={{ backgroundColor: 'grey'}}></Divider>
            </>
    }
    extractNavListKey(item){
        return ""+item;
    }
    render(){

        return(
            <View style={styles.container}>
                <ListAdapter 
                    listItem={this.setNavView}
                    data = {this.props.navData}
                    extractKey={this.extractNavListKey}
                />
                <ListAdapter 
                    listItem={this.setMainListView}
                    data = {this.props.data}
                    extractKey = {this.extractMainListKey}
                    
                />
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
      //backgroundColor: Colors.lighter,
      flexDirection: 'row',
    },
    navText: {
        alignSelf: 'center',
        marginVertical: '10%',


    },
    
  });