import React, { useState, useEffect } from 'react';
import { View, Text,  Alert } from 'react-native';
import apiRequests from './service/api';

const PerfilEmp = ({ userId }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = await apiRequests.ObterInformacoesUsuario(userId);
        setUserInfo(user);
        setLoading(false);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar as informações do usuário.');
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [userId]);

  if (loading) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (!userInfo) {
    return (
      <View>
        <Text>Não foi possível carregar as informações do usuário.</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Nome: {userInfo.nome}</Text>
      <Text>Email: {userInfo.email}</Text>
      <Text>Telefone: {userInfo.telefone}</Text>
      {/* Adicione outros campos de perfil do usuário conforme necessário */}
    </View>
  );
};

export default PerfilEmp;
