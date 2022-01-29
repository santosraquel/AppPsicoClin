import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        paddingTop: 20
     },
     Consultations:{
      width:"100%",
      flexDirection:"row",
     // justifyContent:"space-between",
      marginTop:5
     },
     title:{
      color:"#F92e6a",
      fontSize:18,
      textAlign:"right",
      position:"relative",
     },
     deleteConsultation:{
       justifyContent:"center",
       padding:12,
       left:10,
       marginBottom: 5,
       backgroundColor:"#f5f5f5cf",
     },
     DescriptionConsultation:{
      width:"83%",
      alignContent:"flex-start",
      backgroundColor:"#f5f5f5cf",
      padding:12,
      marginBottom: 5,
      color:"#282b2db5",
      left:10,
     },
     buttonMessage:{
      width:60,
      height:60,
      position:"absolute",
      bottom: 30,
      left:20,
      backgroundColor:"#F92e6a",
      borderRadius:50,
      justifyContent:"center",
      alignItems: "center"
     },
     iconButton:{
       color:"#ffffff",
       fontSize:25,
       //fontWeight:"bold",
      },
      buttonNewConsultation:{
       width:60,
       height:60,
       position:"absolute",
       bottom: 30,
       left:"80%",
       backgroundColor:"#F92e6a",
       borderRadius:50,
       justifyContent:"center",
       alignItems: "center",
      },
    });

export default styles;