import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import apiRequests from "../../services/api.js";

const PesquisarMaqs = () => {
  const [pesquisaNome, setPesquisaNome] = useState("");
  const [maquinaEncontrada, setMaquinaEncontrada] = useState(null);

  const pesquisarMaquina = async () => {
    try {
      const maquina = await apiRequests.PesquisarMaquinaPorNome(pesquisaNome);
      if (maquina) {
        setMaquinaEncontrada(maquina);
      } else {
        Alert.alert(
          "Máquina não encontrada",
          "Nenhuma máquina encontrada com este nome."
        );
      }
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View>
      <Text>Pesquisar Máquina por Nome:</Text>
      <TextInput
        value={pesquisaNome}
        onChangeText={setPesquisaNome}
        placeholder="Digite o nome da máquina a ser pesquisada"
      />
      <Button title="Pesquisar Máquina" onPress={pesquisarMaquina} />

      {maquinaEncontrada && (
        <View>
          <Text>Máquina Encontrada:</Text>
          <Text>Marca: {maquinaEncontrada.marca}</Text>
          <Text>Modelo: {maquinaEncontrada.modelo}</Text>
          <Text>Ano de Fabricação: {maquinaEncontrada.anoFabricacao}</Text>
          <Text>Função: {maquinaEncontrada.funcao}</Text>
          <Text>Potência: {maquinaEncontrada.potencia}</Text>
          <Text>
            Horas de Uso Diário: {maquinaEncontrada.horas_de_uso_diario}
          </Text>
        </View>
      )}
    </View>
  );
};

export default PesquisarMaqs;
