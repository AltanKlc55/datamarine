import { Dimensions, StyleSheet, Text, View } from 'react-native';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
   /// About US
    aboutContent:{
     padding:15
    },
    aboutImageZone:{
      padding:15
    },
    aboutImage:{
        width:Math.round(screenWidth - 30),
        height:250,
        overflow:"hidden",   
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
    links:{
        backgroundColor:'white',
        marginBottom:10,
        borderRadius:11,
        borderColor:'#e0e0e0',
        borderWidth:1,
        overflow:"hidden"
    },
    servicesCardImage:{
        width:Math.round(screenWidth - 31),
        height:200,
        borderRadius:10  
    },
    serviceCard:{
        backgroundColor:'white',
        marginBottom:30,
        borderRadius:11,
        borderColor:'#e0e0e0',
        borderWidth:1,
        overflow:"hidden"
    },
    approvlImage:{
        width:Math.round(screenWidth - 31),
        height:500,
    },
    blogDetailContentZone:{
        padding:15
    },
    contactZone:{
        paddingTop:20,
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center',
    },
    contentInner:{
        padding:10,
        backgroundColor:'#D8D8D8',
        width:Math.round(screenWidth/2-20),
        height : 100,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    contentCard:{
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        width:Math.round(screenWidth/2),
    },
    cardBtnTxt:{
        color:'#041a72',
        fontWeight:'bold',
        fontSize:16,
    },
    formZone:{
      borderWidth:1,
      borderColor:'#D8D8D8',
      borderRadius:10,
      padding:10,
      margin:15,
    },
    input:{
        padding:5,
        marginBottom:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#D8D8D8',
        paddingLeft:5,
    },
    sendContactBtn:{
        backgroundColor:'#041a72',
        width:200,
        height:45,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'
    },
    seenCertBtn:{
        backgroundColor:'#041a72',
        width:150,
        height:40,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'
    },
    inputTxtBtn:{
        color:'white',
        paddingRight:10
    },
    btnZone:{
        alignItems:'center'
    },
    docInfoZone:{
        padding:15,
        borderWidth:1,
        borderColor:'#D8D8D8',
        margin:15
    }
    
   /// About US

  });

  export default styles;
  