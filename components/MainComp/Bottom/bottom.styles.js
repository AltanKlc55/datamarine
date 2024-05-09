import { Dimensions, StyleSheet, Text, View } from 'react-native';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
   container:{
    backgroundColor:"white",
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 5, 
    elevation: 7, 
    flexDirection:"row",
   },
   bottomButtons:{
     width:Math.round(screenWidth / 4),
     justifyContent:"center",
     alignItems:"center",
     padding:7
   },
   btnIcon:{
     color:"#939194"
   },
   bottomBtnText:{
     color:"#939194"
   }
});

  export default styles;
  