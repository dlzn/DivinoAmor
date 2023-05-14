import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function Search () {
  return (
    
    <View style={{ flex: 1, backgroundColor: '#F6F6EE'}}>
        <Text> 
          <Button title="Pesquisar" onPress={() => Alert.alert('Pesquisando...')} />
        </Text>
     </View>
  );
}