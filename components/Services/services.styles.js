import { Dimensions, StyleSheet, Text, View } from 'react-native';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    brandContainer:{
    },
    
     
     allBtn:{
       position:"absolute",
       right:15
     },
     allBtnTxt:{
     color:"#041a72"
     },
     brandsHeader:{
       fontSize:18,
       color:"#071c55",
       textAlign:"center",
       flex:1,
       fontWeight:"800",
     },
     headerZone:{
       flexDirection:"row",
       alignItems:"center",
       width:"100%",
       padding:15
     },
     brandItems:{
        height:190,
        width:Math.round(screenWidth/2 - 30),
        backgroundColor:"white",
        borderColor:"#dedcdc",
        borderWidth:1,
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:10,
        overflow:"hidden",
     },
     image:{
      width:Math.round(screenWidth/2 - 28),
      height:110,
      overflow:"hidden",
     }
  });

  export default styles;
  