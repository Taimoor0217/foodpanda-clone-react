import React, { Component } from 'react';
import SearchBar from './SearchBar'
import RestaurantCard from './RestaurantCard'
import {
    Text,
    View,
    ScrollView
} from 'react-native'
import Styles from '../Styles';
export default class home extends Component{
    render(){
        return(
            <View>
                <SearchBar/>
                <Text>Featured Restaurants</Text>
                <ScrollView style = {Styles.restaurantscontainer}>
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                </ScrollView>
            </View>


        )
    }
}