import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome5 , AntDesign } from '@expo/vector-icons'; 


export default function HomePage () {
  return (

    <ScrollView>
    <SafeAreaView style={styles.container}>

<ImageBackground source={require('../assets/images/fundo1.webp')} style={styles.background}>
<Text style={styles.text1}> FIQUE À VONTADE PARA COMPARTILHAR SEUS TESTEMUNHOS! </Text>
    </ImageBackground>

   <Text style={styles.text2}> SOBRE O APLICATIVO </Text>

   <Text style={styles.text3}>Divina Leitura é um aplicativo feito pela franquia Divino Amor, em Campinas.
    Criado com o intuito de trazer as histórias dos Santos Católicos  e seus respectivos dias.
    Você pode também compartilhar conosco sua experiência com aquele santo de Devoção e a graça alcançada.</Text>

    <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewCarroceu}>
    <Image style={styles.logo} source={require('../assets/images/loja01.jpg')} />
    <Image style={styles.logo} source={require('../assets/images/loja01.jpg')} />
    <Image style={styles.logo} source={require('../assets/images/loja01.jpg')} />
</ScrollView>

    <Text style={styles.text2}> FAÇA-NOS UMA VISITA: </Text>

    <ImageBackground source={require('../assets/images/frenteloja.jpg')} style={styles.image}>
<View style={styles.textContainer}>
      <Text style={styles.text4}>ESPAÇO CATÓLICO DIVINO AMOR </Text>
      <Text style={styles.text5}>Av. Barão de Itapura, 2129 - Jardim Guanabara, Campinas </Text>
      <View style={styles.icons}>
      <FontAwesome5 name="whatsapp-square" size={50} color="#25D366" />
      <FontAwesome5 name="map-marked-alt" size={50} color="red" />
      <AntDesign name="instagram" size={50} color="#E1306C" />
      </View>
    </View>
    </ImageBackground>


    </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EE',
  },
  icons: {
    justifyContent:'space-between',
    flexDirection:'row',
    flex: 1,
    padding: 10,
  },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },

    text1: {
    marginVertical: 60,
    textAlign: 'center',
    fontSize: 20,
    height: 'auto',
    color: '#FFFFFF',
  },

  text2: {
    marginVertical: 30,
    textAlign: 'center',
    fontSize: 25,
    height: 'auto',
    color: '#CBAA6C',
    fontWeight: 'bold'
  },

  text3: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
    height: 'auto',
    color: '#6F5536',
  },

  textContainer: {
    backgroundColor: 'rgba(199, 174, 131, 0.3)',
    justifyContent: 'space-between',
    padding: 50,
  },

  text4: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FFFFFF',
    padding: 40,
  },

  text5: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFFFF',
    padding: 40,
  },
  logo: {
    width: 450,
    height: 400,
  }

})