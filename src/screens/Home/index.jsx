import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import CadastrarMaqs from "../CadastrarMaqs";


export default function Home() {

  const navigator =useNavigation();
  return (

    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>A </Text>
        <Text style={styles.titulo}>SUSTENTABILIDADE </Text>
        <Text style={styles.titulo}>NÃO É </Text>
        <Text style={styles.titulo}>UM CUSTO </Text>
        <Text style={styles.titulo}>PARA A </Text>
        <Text style={styles.titulo}>INDÚSTRIA,</Text>
        <Text style={styles.titulo}>É UM</Text>
        <Text style={styles.titulo}>INVESTIMENTO</Text>
        <Text style={styles.ultimoTitulo}>NO NOSSO PLANETA.</Text>

        <Image style={styles.gradient} source={require("../../../assets/imagefundo.jpg")} />

        <Text style={styles.subtitulo}>
          Venha descobrir como anda a{"\n"}
          produção de seus maquinários!
        </Text>

        <Text style={styles.subtema}>
          Avalie suas máquinas conosco.{"\n"}
          Entenda quão sustentável ela é e{"\n"}
          como pode ser ainda melhor!
        </Text>

        <TouchableOpacity style={styles.botao} onPress={() => navigator.navigate(CadastrarMaqs)}>
          <Text style={styles.textobotao}>Cadastre sua máquina</Text>
          <Feather name="arrow-right" size={30} color={"#D6D6D6"} />

        </TouchableOpacity>
        <Image
          style={styles.imga}
          source={require("../../../assets/imagebaixo.png")}
        />
      </View>
    </ScrollView>
  );
}