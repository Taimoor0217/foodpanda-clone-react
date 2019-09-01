import {StyleSheet} from 'react-native'
const theme_color = "#009936"
export default styles = StyleSheet.create({
    searchbarholder :{
        padding : 10,
        elevation : 2,
        borderColor:'#000', 
    },
    search :{
        display: "flex",
        height: 40, 
        textAlign : "center",
        shadowColor : "gray",
        shadowOpacity: 10,
        
    },
    restaurant:{
        marginTop : 25,
        elevation : 2,
        padding : 15,
        borderColor:'#000',
    },
    restaurantCard :{
            width : "100%",
            height : 200,
            alignSelf : "center",
    },
    restaurantscontainer :{
        display : "flex",
    },
    restaurantdescription :{
        marginTop : 20
    },
    restaurantname :{
        fontSize : 21,
        fontWeight : "bold",
    },
    restaurantspecs :{
        color : "#000",
        marginTop : 4
    },
    restaurantprices :{
        color : theme_color
    },
    heading : {
        paddingTop: 15,
        textAlign: "center",
        fontSize : 30,
        fontWeight : "bold"

    }
});
  