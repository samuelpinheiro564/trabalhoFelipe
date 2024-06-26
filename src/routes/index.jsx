import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import StackRoutes from './stack.routes';
import TabRoutes from './tab.routes';

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes>
        <TabRoutes />
      </StackRoutes>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}