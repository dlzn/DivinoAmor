import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppRoutes } from './src/routes/AppRoutes';


export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar style="auto" />
      <AppRoutes />
    </View>
  );
}

