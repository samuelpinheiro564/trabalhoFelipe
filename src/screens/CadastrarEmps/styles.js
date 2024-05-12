import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 40,
      marginBottom: 20,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    button: {
      backgroundColor: '#008000',
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    registerText: {
      marginTop: 20,
    },
    registerLink: {
      color: '#008000',
      fontWeight: 'bold',
    },
    line: {
      height: 1,
      backgroundColor: 'black',
      width: '100%',
      marginBottom: 20,
    },
    errorMessage: {
      color: 'red',
      textAlign: 'center',
    },
  });
  export default styles;
  