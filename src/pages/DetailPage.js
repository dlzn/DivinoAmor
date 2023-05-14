import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';

function DetailPage() {
  return (
    <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>divina leitura</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image style={styles.logo} source={require('../assets/images/saobento.png')} />
        <View style={styles.info}>
          <Text style={styles.infoText}>São Bento</Text>
        </View>
        <Text style={styles.texto2}> "Ó glorioso Patriarca São Bento, que vos mostrastes
                                      sempre compassivo com os necessitados" </Text>
        <View style={styles.texto}>
          <Image style={styles.logo} source={require('../assets/images/fundo1.webp')} />
          <Image style={styles.logo} source={require('../assets/images/fundo1.webp')} />
        </View>
        <Text style={styles.texto3}> Também possuímos produtos relacionados a ela, 
          confira abaixo: 
        </Text>
      </ScrollView>
    </ScrollView>
  );
}

const styles = {
  header: {
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
    info: {
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
    infoText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: "center",
    justifyContent: "center",
    color: '#6F5536'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  scrollView: {
    padding: 80,
    alignItems: 'center',

  },
texto: {
  flexDirection: 'row'
    
},
texto2: {
  textAlign: 'center',  
  fontSize: 17,
    flex: 1,
    width: 360,
    top: 0,
    left: 4,
    right: 0,
    bottom: 0,  
    alignItems: "center",
    justifyContent: "center",
    color: '#CBAA6C'

},
logo:{
  height: 150,
    width: 150

},
texto3: {
  fontSize: 20,
  fontWeight: 700,
    height: 81,
    lineHeight: 27,
    textAlign: 'center',  
    fontSize: 20,
      flex: 1,
      width: 360,
      top: 0,
      left: -2,  
      color: '#CBAA6C'

},

};

export default DetailPage;
