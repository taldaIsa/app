import * as React from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import db from "./assets/banco de dados"

export default class App extends React.Component {
  constructor(){
  super()
  this.state = {
  cantor:"",
  infocantor:[]
  }
  }
  render(){
  return (
    <View style = {styles.container}>
      <SafeAreaProvider>
      <Header
      backgroundColor="purple"
      centerComponent={{text:"meu app",style:{fontSize:25}}}></Header>
      <Image source = {require("./assets/borboleta.png")}
      style = {styles.borboleta}>
      
      </Image>
      <TextInput
      onChangeText = {(texto)=>{this.setState({cantor:texto})}}
      style = {styles.digitcantor}>
  
      </TextInput>
      <TouchableOpacity
      onPress = {()=>{
      db[this.state.cantor]?
      (this.setState({infocantor:db[this.state.cantor].info})):
      alert("Procure outro cantor")
      
      }}
      style = {styles.botao}>
      <Text>Pesquisar</Text>
      </TouchableOpacity>
      <Text>{db["TravisScott"].info}</Text>
      {this.state.infocantor.map((info)=>{
      return(
      <Text>{info}</Text>
      )
      })}
      </SafeAreaProvider>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  borboleta: {
  width: 90,
  height: 90,
  alignSelf:"center"

  },
  digitcantor: {
  borderWidth:2,
  width:150,
  alignSelf:"center",
  textAlign:"center"
  },
  botao: {
  alignSelf:"center",
  backgroundColor:"purple",
  marginTop:7,
  borderRadius:5
  }

});
