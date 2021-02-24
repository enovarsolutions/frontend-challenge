import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Logo from '../../assets/tudo-logo2.png';
import CreditCard from '../../assets/creditCard.png';
import Portabilidade from '../../assets/portability.png';
import Refinanciamento from '../../assets/refinancing.png';
import NovoEmprestimo from '../../assets/newLoan.png';

// import { Container } from './styles';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#000" />
        <View style={styles.header}>
          <View style={styles.headerIcons}>
            <Image source={Logo} style={{ height: 40, width: 40 }} />
            <Icon name="notifications-outline" size={30} color="#fff" />
          </View>
          <View>
            <Text style={styles.client}>Olá, Eudálio Sousa</Text>
            <Text style={styles.text}>Seu crédito disponível é de</Text>
            <Text style={styles.credito}>R$ 5.048,10</Text>
          </View>
          <Icon style={styles.arrowBtn} name="chevron-down-circle" size={40} color="#d2267f" />
        </View>
        <ScrollView style={styles.main}>
          <View>
            <Text style={styles.mainTitle}>Oportunidades</Text>
          </View>
          <View style={styles.menu}>
              <TouchableOpacity onPress={() => navigation.navigate('Value')} style={styles.menuItem}>
                <Image source={NovoEmprestimo} style={{ height: 70, width: 70 }} />
                <Text style={styles.textButton}>Novo Empréstimo</Text>
                <Text style={styles.textItemValue}>Até R$ 3058,10</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Image source={Portabilidade} style={{ height: 70, width: 70 }} />
                <Text style={styles.textButton}>Portabilidade</Text>
                <Text style={styles.textItemValue}>Até R$ 2000,00</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Image source={Refinanciamento} style={{ height: 70, width: 70 }} />
                <Text style={styles.textButton}>Refinanciamento</Text>
                <Text style={styles.textItemValue}></Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Image source={CreditCard} style={{ height: 70, width: 70 }} />
                <Text style={styles.textButton}>Cartão de crédito consignado</Text>
                <Text style={styles.textItemValue}></Text>
              </TouchableOpacity>
          </View>
        </ScrollView>
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
    height: 200,
    borderBottomRightRadius: 40,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 15
  },
  client: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  text: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  credito: {
    color: '#d2267f',
    fontSize: 33,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold'
  },
  arrowBtn: {
    marginTop: 10,
    marginHorizontal: '45%',
  },
  main: {
    paddingVertical: 35,
    paddingHorizontal: 20,
  },
  mainTitle: {
    color: '#000',
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold'
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  menuItem: {
    width: 180,
    height: 180,
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    maxHeight: 40,
  },
  textItemValue: {
    color: '#d22688',
    fontSize: 12,
  }
});

export default Home;