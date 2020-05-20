
import React, {Component} from 'react'; 
import {
            AppRegistry,
            FlatList,
            InteractionManager
        } from 'react-native'; 

//https://stackoverflow.com/questions/56985307/react-native-vector-icon-not-working-on-current-version-0-60

//LESSON: Use 'require()' to consume json files -
//JSON.parse and import did not work as expected


export default class ListAdapter extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data: null
        }
        this.props.horizontal = false;
    }

    componentDidMount(){
        
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                data:this.props.data
            })
        })
       
    }

    shouldComponentUpdate(nextProps, nexState){
        return true;
    }

    render(){
     return(   
              <FlatList
                    contentContainerStyle={this.props.contentContainerStyle}
                    data={this.state.data}
                    renderItem={ ({item}) =>{

                            return ( this.props.listItem(item) )
                        } 
                    }
                    keyExtractor= {this.props.extractKey}
                    horizontal = {this.props.horizontal}
                />
        )
    }
}


