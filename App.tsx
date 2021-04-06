import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

const App: React.FC = () => (
  <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
    <Text>Hello Wold</Text>
    <StatusBar style="auto" />
  </View>
);

export default App;
