import { Dimensions, StyleSheet, Text, View } from 'react-native';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    menuContainer:{
      flex:1,
      color:"red",
      marginTop:10,
      padding:15
    },
    menuBtn:{
      paddingBottom:15,
      paddingTop:15,
      paddingLeft:15,
      marginBottom:10,
      backgroundColor:"#041a72",
      borderRadius:10,
      flexDirection:"row"
    },
    menuBtnTxt:{
       color:"white",
       fontWeight:"600",
       paddingLeft:16 
    },
    menuOutter:{
      flex:1,
    },
    upperTitle:{
      padding:15,
      backgroundColor:"#f7f8fa",
      },
      upperTitleText:{
          color:"#212529",
          fontSize:14,
          fontWeight:"bold"
      },
  });

  export default styles;
  