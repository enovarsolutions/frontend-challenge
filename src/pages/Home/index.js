import React, {useState, useEffect} from 'react';
import { View, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';
import api from '../../services/api';

import FieldText from '../../components/FieldText';
import Icon from 'react-native-vector-icons/Ionicons';

import Logo from '../../assets/tudo-logo2.png';
import CreditCard from '../../assets/creditCard.png';
import Portabilidade from '../../assets/portability.png';
import Refinanciamento from '../../assets/refinancing.png';
import NovoEmprestimo from '../../assets/newLoan.png';

const Home = ({navigation}) => {
  const [dados, setDados] = useState({})

  useEffect(() => {
    async function getDadosApi() {
      await api.get('/margins')
        .then(resp => {
          console.log(resp.data.totalMaxValue)
          setDados(resp.data)
        })
        .catch(err => alert(err))
    }
    getDadosApi();
  }, [])
  
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#000" />
        <View style={styles.header}>
          <View style={styles.headerIcons}>
            <Image source={Logo} style={{ height: 40, width: 40 }} />
            <Icon name="notifications-outline" size={30} color="#fff" />
          </View>
          <View>
            <FieldText style={styles.client} value="Olá, Eudálio Sousa" />
            <FieldText style={styles.text} value="Seu crédito disponível é de" />
            <FieldText style={styles.credito} value={`R$ ${dados.totalMaxValue}`} />
          </View>
          <Icon style={styles.arrowBtn} name="chevron-down-circle" size={40} color="#d2267f" />
        </View>
        <ScrollView style={styles.main}>
          <View>
            <FieldText style={styles.mainTitle} value="Oportunidades" />
          </View>
          <View style={styles.menu}>
              <TouchableOpacity onPress={() => navigation.navigate('Value')} style={styles.menuItem}>
                <Image source={NovoEmprestimo} style={{ height: 70, width: 70 }} />
                <FieldText style={styles.textButton} value="Novo Empréstimo" />
                <FieldText style={styles.textItemValue} value={`Até R$ ${dados.loanMaxValue}`} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Image source={Portabilidade} style={{ height: 70, width: 70 }} />
                <FieldText style={styles.textButton} value="Portabilidade" />
                <FieldText style={styles.textItemValue} value={`Até R$ ${dados.portabilityMaxValue}`} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Image source={Refinanciamento} style={{ height: 70, width: 70 }} />
                <FieldText style={styles.textButton} value="Refinanciamento" />
                <FieldText style={styles.textItemValue} value={dados.refinanceMaxValue === 0 ? '' : `Até R$ ${dados.refinanceMaxValue}`} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Image source={CreditCard} style={{ height: 70, width: 70 }} />
                <FieldText style={styles.textButton} value="Cartão de crédito consignado" />
                <FieldText style={styles.textItemValue} value={dados.creditCardMaxValue === 0 ? '' : `Até R$ ${dados.creditCardMaxValue}`} />
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