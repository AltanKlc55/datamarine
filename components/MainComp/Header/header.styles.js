import { StyleSheet, Text, View,Dimensions } from 'react-native';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const styles = StyleSheet.create({
     headerZone:{
        flexDirection:"row",
        width:"100%",
        backgroundColor:"#041a72",
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:20,

     },
     menuItem:{
        color:"white"
     },
     sideMenuItem:{
        flexDirection:"row",
        margin:2,
        alignItems:"center"
     },
     sideMenuItemIcon:{
       paddingRight:10
     },
     image: {
        width:screenWidth-240,
        height:60,
      },
      menuBtnZone:{
        flex:1,
        alignItems:"flex-start"
      },
      profileBtnZone:{
        flex:1,
        alignItems:"flex-end"
      },
      headerZoneBottom:{
        flexDirection:"row",
        width:"100%",
        backgroundColor:"#041a72",
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:25,
        paddingBottom:5,
        zIndex:9999,
      },
      headerZoneBtmTxtt:{
        color:"white",
        alignSelf:"center",
      },
      butttonZoneH:{
        borderRadius:5,
        borderWidth:1,
        borderColor:"white",
        width:"100%",
        height:30,
        justifyContent:"center",
        marginBottom:10
      },
      buttonOuttter:{
        width:"47%",
        marginHorizontal:10
      },
      menuItems:{
        color:"#041a72",
        fontSize:14,
        marginVertical:5,
        paddingVertical:5,
        textTransform:"uppercase",
        fontWeight:"600"
     },
  });

  export default styles;
  