import {StyleSheet} from 'react-native'
const theme_color = "#009936"
export default styles = StyleSheet.create({
    searchbarholder :{
        padding : 35
    },
    search :{
        display: "flex",
        height: 40, 
        borderColor: theme_color,      
        borderWidth: 1,
        textAlign : "center",
        shadowColor : "gray",
        shadowOpacity: 10,
        
    },
    restaurantCard :{
            width : "95%",
            height : 200,
            marginTop :25,
            marginLeft :5,
            marginRight :5,
            alignSelf : "center",
            // backgroundColor : "red"
    },
    restaurantscontainer :{
        display : "flex",
    }
});
  