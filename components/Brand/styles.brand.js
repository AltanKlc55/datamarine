import { Dimensions, StyleSheet, Text, View } from 'react-native';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
        brandContainer:{
      },
      brandsHeader:{
      color:"black",
      textAlign:"left",
     },
     allBtn:{
       position:"absolute",
       right:15
     },
     allBtnTxt:{
     color:"#041a72"
     },
     brandsHeader:{
       fontSize:18
     },
     headerZone:{
       flexDirection:"row",
       alignItems:"center",
       width:"100%",
       padding:15
     },
     brandItems:{
        height:100,
        width:100,
        marginHorizontal:30
     },
     image:{
      width:150,
      height:100
     }
  });

  export default styles;
  