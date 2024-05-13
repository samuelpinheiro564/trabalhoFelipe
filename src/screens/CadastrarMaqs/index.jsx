import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import EmpRepository from '../../Models/EmpRepository';
import apiRequests from '../../services/api';
import { useNavigation } from '@react-navigation/native';


export default function CadastrarMaqs() {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [anoFabricacao, setAnoFabricacao] = useState('');
  const [funcao, setFuncao] = useState('');
  const [potencia, setPotencia] = useState('');
  const [horasDeUsoDiario, setHorasDeUsoDiario] = useState('');
  const [msgErro, setMsgErro] = useState('');
  const navigation = useNavigation();

  const cadastrarMaquina = async () => {
    try {
      // Verifica se todos os campos obrigatórios estão preenchidos
      if (!marca || !modelo || !anoFabricacao || !funcao || !potencia || !horasDeUsoDiario) {
        setMsgErro("Preencha todos os campos!");
        return;
      }
      // Verifica se o ano de fabricação foi informado
      if (!anoFabricacao) {
        setMsgErro("Informe o ano de fabricação!");
        return;
      }
  
      // Cria uma instância do repositório de empresas
      const empRepository = new EmpRepository();
      // Obtém todos os dados da empresa
      const empresas = await empRepository.getAllEmps();
  
      // Verifica se há empresas cadastradas
      if (!empresas || empresas.length === 0) {
        setMsgErro("Nenhuma empresa encontrada!");
        return;
      }
  
      // Como você não especificou como obter o ID da empresa, vamos supor que você quer pegar o ID da primeira empresa encontrada
      const empId = empresas[0].id;
  
      // Cria um objeto com os dados da máquina
      const dadosMaquina = { marca, modelo, anoFabricacao, funcao, potencia, horasDeUsoDiario, empId };
  
      // Chama a API para cadastrar a máquina
      const response = await apiRequests.CadastrarMaquinas(dadosMaquina);
  
      // Verifica se ocorreu algum erro na resposta da API
      if (response && response.erro) {
        setMsgErro(response.erro);
        return;
      }
  
      // Se tudo ocorreu bem, exibe mensagem de sucesso e navega para a página de pesquisa de máquinas
      setMsgErro('Máquina cadastrada com sucesso!');
      navigation.navigate(PesquisarMaqs);
    } catch (error) {
      console.error('Erro ao cadastrar máquina:', error);
      setMsgErro('Erro ao cadastrar máquina: ' + error.message);
    }
  };
  
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro de Máquinas</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite a Marca da máquina"
          value={marca}
          onChangeText={setMarca}
        />
        <View style={styles.line} />

        <TextInput
          style={styles.input}
          placeholder="Digite o Modelo da máquina"
          value={modelo}
          onChangeText={setModelo}
        />
        <View style={styles.line} />

        <TextInput
          style={styles.input}
          placeholder="Digite o ano de fabricação da máquina"
          value={anoFabricacao}
          onChangeText={setAnoFabricacao}
        />
        <View style={styles.line} />

        <TextInput
          style={styles.input}
          placeholder="Digite a Função da máquina"
          value={funcao}
          onChangeText={setFuncao}
        />
        <View style={styles.line} />

        <TextInput
          style={styles.input}
          placeholder="Digite a potencia da máquina"
          value={potencia}
          onChangeText={setPotencia}
        />
        <View style={styles.line} />

        <TextInput
          style={styles.input}
          placeholder="Digite horas de uso diario da máquina"
          value={horasDeUsoDiario}
          onChangeText={setHorasDeUsoDiario}
        />
        <View style={styles.line} />

        <Text style={styles.texto}>{msgErro}</Text>

        <TouchableOpacity style={styles.button} onPress={cadastrarMaquina}>
          <Text style={styles.buttonText}>Cadastrar Máquina</Text>
        </TouchableOpacity>
      </View>
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
  texto: {
    fontSize: 18,
    marginBottom: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
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
    width: '70%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    width: '80%',
    marginBottom: 20,
  },
});
