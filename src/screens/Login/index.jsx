import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import apiRequests from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import Home from '../Home';
import CadastrarEmps from '../CadastrarEmps';

export default function Login() {
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [msgErro, setMsgErro] = useState(""); 
  const [erro, setErro] = useState(false);
  const navigation = useNavigation();
  const [msgSucesso, setMsgSucesso] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const handleLogin = async () => {
    try {
        if (!empresa || !email || !senha) {
            console.log('Preencha todos os campos!');
            setErro(true);
            setMsgErro("Preencha todos os campos!");
            return;
        } else {
           await apiRequests.VerificarSenha(senha, empresa);
         
                console.log('Login realizado com sucesso!');
                setSucesso(true);
                setMsgSucesso("Login realizado com sucesso!");
               return navigation.navigate(Home);
        
        }
    } catch (error) {
        console.error('Erro ao verificar senha:', error.message);
        setErro(true);
        setMsgErro("Senha incorreta ou Inexistente CADASTRE-SE!");
    }
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da empresa"
        value={empresa}
        onChangeText={setEmpresa}
      />
      <View style={styles.line} />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.line} />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <View style={styles.line} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity >
      <Text style={styles.registerText}>
        Não possui conta? <TouchableOpacity style={styles.registerLink} onPress={()=> navigation.navigate(CadastrarEmps)}><Text>Cadastre-se aqui.</Text></TouchableOpacity>
      </Text>
      {erro && <Text style={styles.errorMessage}>{msgErro}</Text>}
      {sucesso && <Text style={styles.errorMessage}>{msgSucesso}</Text>}
    </ScrollView>
  );
}

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
