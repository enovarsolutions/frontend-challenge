import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Logo from '../../assets/tudo-logo2.png';

const Result = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.textTask}>Escolha um banco.</Text>
        <View style={styles.box}>
          <View style={styles.blockOne}>
            <View style={styles.sectionImage}>
              <Image source={Logo} style={styles.image} />
            </View>
            <View style={styles.sectionBlockOne}>
              <Text style={styles.textBold}>60 parcelas de</Text>
              <Text style={styles.textDestaque}>R$ 372,65</Text>
              <Text style={styles.textGray}>Total de R$ 5.030,00</Text>
            </View>
            <View>
              <Text style={styles.textGray}>Com taxa de</Text>
              <Text style={styles.textBold}>1,30% a.m.</Text>
            </View>
          </View>
          <View style={styles.blockTwo}>
            <View style={styles.textIcon}>
              <Text style={styles.textGray}>Previsão de pagamento </Text>
              <Icon name="help-circle-outline" size={20} color="#D22688" />
            </View>
            <Text style={styles.textBold}>19 de maio a 01 de junho de 2021</Text>
            <TouchableOpacity style={styles.btnContratar}>
              <View style={styles.textIcon}>
                <Text style={styles.textBtnContratar}>Contratar</Text>
                <Icon name="chevron-forward" size={22} color="#D22688" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    paddingVertical: 30,
    paddingHorizontal: 10
  },
  textTask: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  box: {
    backgroundColor: '#fff',
    borderLeftWidth: 5,
    borderLeftColor: '#D22688',
    borderRadius: 6,
    paddingHorizontal: 15,
  },
  blockOne: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 25
  },
  sectionImage: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 12,
  },
  image: {
    height: 60,
    width: 60,
  },
  sectionBlockOne: {
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    paddingRight: 20
  },
  blockTwo: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 20,
    paddingVertical: 20
  },
  textIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDestaque: {
    color: '#D22688',
    fontSize: 22,
    fontWeight: 'bold'
  },
  textGray: {
    fontSize: 15,
    color: '#777',
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 15
  },
  btnContratar: {
    marginTop: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textBtnContratar: {
    color: '#D22688',
    fontSize: 17,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Result;