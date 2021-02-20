import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.client}>Olá, José Carlos</Text>
          <Text style={styles.text}>Seu crédito disponível é de</Text>
          <Text style={styles.credito}>R$ 5.048,10</Text>
        </View>
        <View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec'
  },
  header: {
    backgroundColor: '#000',
    fontWeight: 'bold',
    height: 210,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
  },
  client: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  text: {
    color: '#ccc',
    fontSize: 22,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  credito: {
    color: '#d2267f',
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

export default Home;