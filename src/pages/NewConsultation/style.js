import { StyleSheet } from 'react-native'
 
const styles = StyleSheet.create({
 container: { 
   flex:1,
   backgroundColor:'#fff'
 },
 label:{
  width:"90%",
  marginTop: 20,
  fontSize:16,
  marginLeft: 20,
  color:"#F92E6A",
 },
 input:{
  width:"90%",
  marginTop:2,
  padding:10,
  height:50,
  borderWidth: 1,
  borderColor:"#F92E6A",
  marginLeft:"auto",
  marginRight:"auto",
  borderRadius:15,
 },
 buttonNewConsultation:{
  width:"90%",
  height:60,
  position:"relative",
  bottom: 5,
  left:20,
  backgroundColor:"#F92e6a",
  borderRadius:50,
  justifyContent:"center",
  alignItems: "center"
 },
 iconButton:{
  color:"#ffffff",
  fontSize:20,
  fontWeight:"bold",
 }
 
});
 
export default styles;