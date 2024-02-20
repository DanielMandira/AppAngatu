import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      justifyContent: 'center'
    },
    backgroundColor: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      height: '100%',
      opacity: 0.38
    },
    containerLogin: {
      position: 'absolute',
      alignSelf: 'center'
    },
    backgroundLogin: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    },
    containerItens: {
      top:80,
      position: 'relative',
      flexDirection: 'column'
    },
    containerLogoRibeira: {
      alignSelf: 'center',
      top: -150
    },
    logoRibeira: {
      width: 200,
      height: 100,
      resizeMode: 'center'
    },
    containrAngatu: {
      flexDirection: 'row',
      justifyContent: 'center'
  
    },
    containerLogoAngatu: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      top: -150
    }
    ,
    logoAngatu: {
      width: 80,
      height: 100,
      resizeMode: 'contain'
    },
    textLogo: {
      fontSize: 70,
      fontWeight: 'bold'
    },
    TextInput: {
      width: 300,
      height: 55,
      padding: 10,
      margin: 5,
      borderRadius: 15,
      backgroundColor: '#224957',
      color: '#FFF',
      fontSize: 18,
    },
  LinearGradient:{
    width:'100%',
    height:'100%', 
    position:'absolute', 
    justifyContent:'center', 
    alignItems:'center'},
    text23: {
      fontSize: 23,
      color: '#fff',
    },
    text16: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center'
    },
    textRegistro: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
      textDecorationLine: 'underline'
    },
    textSemConta: {
      color: '#ccc',
      fontSize: 14,
      textAlign: 'center'
    },
    containerTextInput: {
      alignItems: 'center',
      top: -80
    },
    textoBotaoLogin: {
      color: '#FFF',
      fontSize: 20,
      textAlign: 'center'
    },
    botaoLogin: {
      backgroundColor: '#20DF7F',
      width: 105,
      borderRadius: 10,
      top: 20,
      margin: 5,
      padding: 2
    },
    containerRegistro: {
      
    }
  });
  