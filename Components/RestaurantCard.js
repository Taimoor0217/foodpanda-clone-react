import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    ImageBackground,
    ImageBackgroundBase
  } from 'react-native';
  import Styles from '../Styles'
export default class extends Component{
    render(){
        return(
            <View style = {Styles.restaurant}> 
                    <ImageBackground source={{
                        uri : 'https://cdn-01.independent.ie/incoming/article36646079.ece/bf867/AUTOCROP/w620/os_183906250_l_2015.jpg'
                    }} 
                    style={Styles.restaurantCard}
                    opacity = {0.9}
                    resizeMode = "stretch"
                    borderRadius = {2}
                    >
                    </ImageBackground>
                    <View style={Styles.restaurantdescription}>
                        <Text style = {Styles.restaurantname}>
                            McDonalds - DHA Phase 5
                        </Text>
                        <Text style ={Styles.restaurantspecs}>
                            Fast Food, Chicken, Fried Chicken, Pizza, Steaks, Burgers
                        </Text>
                        <Text style ={Styles.restaurantprices}>
                            <Text style = {{fontSize : 14, fontWeight : "bold"}}>Rs</Text> 49 minimum <Text style = {{fontSize : 20, fontWeight : "bold"}}>|</Text> Free Delivery
                        </Text>
                    </View>
            </View>
        )
    }
}