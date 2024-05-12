import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import apiRequests from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import Login from '../Login';


export default function CadastrarEmps() {
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep,setCep] = useState('');
  const [email, setEmail] = useState('');
  const [area_atuacao,setArea_atuacao] = useState('');
  const [senha, setSenha] = useState('');
  const [msgErro, setMsgErro] = useState("");
  const [erro, setErro] = useState(false);

  const navigation = useNavigation();

  const Cadastro = async () => {
    const dadosEmpresa = {cnpj, nome, cep, area_atuacao, email, senha };
    try {
      if(!nome || !cnpj || !cep || !email || !area_atuacao || !senha){
        setErro(true);
        setMsgErro("Preencha todos os campos!");
        return;
      }else{
      await apiRequests.CadastrarEmpresa(dadosEmpresa);
      console.log("nome cadastrada com sucesso!");
      navigation.navigate(Login);
    }
    } catch (error) {
      console.error(error.message);
    } 
};
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da Empresa"
        value={nome}
        onChangeText={setNome}
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
        placeholder="CNPJ"
        secureTextEntry
        value={cnpj}
        onChangeText={setCnpj}
      />
      <View style={styles.line} />
      <TextInput
        style={styles.input}
        placeholder="CEP"
        secureTextEntry
        value={cep}
        onChangeText={setCep}
      />
      <View style={styles.line} />
      <TextInput
        style={styles.input}
        placeholder="Area de Atuação"
        secureTextEntry
        value={area_atuacao}
        onChangeText={setArea_atuacao}
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
      <TouchableOpacity style={styles.button} onPress={Cadastro}>
        <Text style={styles.buttonText}>finalizar Cadastro.</Text>
      </TouchableOpacity >
      
      {erro && <Text style={styles.errorMessage}>{msgErro}</Text>}
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
  