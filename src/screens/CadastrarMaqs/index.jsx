import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import apiRequests from '../../services/api';

export default function CadastrarMaqs(){
  
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [anoFabricacao, setAnoFabricacao] = useState('');
  const [funcao, setFuncao] = useState('');
  const [potencia, setPotencia] = useState('');
  const [horas_de_uso_diario, setHoras_de_uso_diario] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [msgErro, setMsgErro] = useState('');

  const cadastrarMaquina = async () => {
    try {
      if (!nome || !marca || !modelo || !anoFabricacao || !funcao || !potencia || !horas_de_uso_diario || !cnpj) {
        const dadosMaquina = { nome, marca, modelo, anoFabricacao, funcao, potencia, horas_de_uso_diario, cnpj };
        await apiRequests.CadastrarMaquina({ dadosMaquina });
        msgErro("Máquina cadastrada com sucesso!");
      }
    } catch (error) {
      msgErro("Erro ao cadastrar máquina: " + error.message);
    }

  return (
    <View>
      <Text>Nome da Máquina:</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome da máquina"
      />
      <Text>Marca:</Text>
      <TextInput
        value={marca}
        onChangeText={setMarca}
        placeholder="Digite a marca da máquina"
      />
      <Text>Modelo:</Text>
      <TextInput
        value={modelo}
        onChangeText={setModelo}
        placeholder="Digite o modelo da máquina"
      />
      <Text>Ano de Fabricação:</Text>
      <TextInput
        value={anoFabricacao}
        onChangeText={setAnoFabricacao}
        placeholder="Digite o ano de fabricação"
        keyboardType="numeric"
      />
      <Text>Função:</Text>
      <TextInput
        value={funcao}
        onChangeText={setFuncao}
        placeholder="Digite a função da máquina"
      />
      <Text>Potência:</Text>
      <TextInput
        value={potencia}
        onChangeText={setPotencia}
        placeholder="Digite a potência da máquina"
      />
      <Text>Horas de Uso Diário:</Text>
      <TextInput
        value={horas_de_uso_diario}
        onChangeText={setHoras_de_uso_diario}
        placeholder="Digite as horas de uso diário da máquina"
        keyboardType="numeric"
      />
      <Text>CNPJ da Empresa:</Text>
      <TextInput
        value={cnpj}
        onChangeText={setCnpj}
        placeholder="Digite o CNPJ da empresa proprietária"
      />
      <Text>{msgErro}</Text>
      <Button title="Cadastrar Máquina" onPress={cadastrarMaquina} />
    </View>
  );
};
}

