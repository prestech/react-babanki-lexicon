import React, {Component} from 'react'; 
import {
            FlatList,
            SafeAreaView,
            View,
            Text,
            StyleSheet
        }from 'react-native'

import ListAdapter from './ListAdapter'

import ExpandableItem from './ListItem'

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
                 style={styles.lexitem}
                 nativeWord={item.kejomWord}
                 englishWord={item.englishWord}
                 onSpeakerIconTouch={this.props.onSpeakerIconTouch}
                 onLikeIconTouch={this.props.onLikeIconTouch}
                />
            )
    }

    extractMainListKey(item){
        return item.lexiconId;
    }


    setNavView(item){
      return <Text style={styles.navItem}>{item}</Text>
    }
    extractNavListKey(item){
        return ""+item;
    }
    render(){

        return(
            <View style={styles.container}>
                <ListAdapter 
                    style={styles.navList}
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
    navList: {
      backgroundColor: "grey",
      width: 20,
      position: "absolute",
      alignSelf: 'center',
    },
    navItem:{
        paddingBottom: 2,
    },
    lexitem: {
     paddingLeft: 10
    },
    
  });