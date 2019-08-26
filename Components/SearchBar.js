import React, { Component } from 'react';
import {
    TextInput ,View
} from 'react-native'
import styles from '../Styles'
export default class extends Component{
    render(){
        return(
            <View style = {styles.searchbarholder}>
                <TextInput
                autoCapitalize ="words"
                // onChangeText={(text) => this.setState({text})}
                // value={this.state.text}
                style={styles.search}
                placeholder = "Find Restaurants Near You"
              />
            </View>
        )
    }
}