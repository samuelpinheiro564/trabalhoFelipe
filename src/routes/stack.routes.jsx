import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import CadastrarEmps from "../screens/CadastrarEmps";
import PesquisarMaqs from "../screens/PesquisarMaqs";
import CadastrarMaqs from "../screens/CadastrarMaqs";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CadastrarMaqs" component={CadastrarMaqs} />
      <Stack.Screen name="PesquisarMaqs" component={PesquisarMaqs} />     
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CadastrarEmps" component={CadastrarEmps} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
