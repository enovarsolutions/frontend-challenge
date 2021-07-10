import React, {useState, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import api from '../../services/api';

import FieldText from '../../components/FieldText';
import Icon from 'react-native-vector-icons/Ionicons';

import Logo from '../../assets/tudo-logo2.png';

const Result = ({navigation}) => {
  const [contractValue, setContractValue] = useState(navigation.getParam('valueSelectedLoan'))
  const [numberInstallments, setNumberInstallments] = useState(navigation.getParam('valueSelectedPeriod'))
  const [simulation, setSimulation] = useState({})

  useEffect(() => {
    async function getDadosApi() {
      await api.get('/simulation')
        .then(resp => {
          setSimulation(resp.data);
        })
        .catch(err => alert(err))
    }
    getDadosApi();
  }, [])

  return (
    <View style={styles.container}>
        <FieldText style={styles.textTask} value="Escolha um banco." />
        <View style={styles.box}>
          <View style={styles.blockOne}>
            <View style={styles.sectionImage}>
              <Image source={Logo} style={styles.image} />
            </View>
            <View style={styles.sectionBlockOne}>
              <FieldText style={styles.textBold} value={`${numberInstallments} parcelas de`} />
              <FieldText style={styles.textDestaque} value={`R$ ${parseFloat((contractValue/numberInstallments) + ((contractValue/numberInstallments) * simulation.annualNominalRate)).toFixed(2)}`} />
              <FieldText style={styles.textGray} value={`Total de R$ ${parseFloat(numberInstallments * ((contractValue/numberInstallments) + ((contractValue/numberInstallments) * simulation.annualNominalRate))).toFixed(2)}`} />
            </View>
            <View>
              <FieldText style={styles.textGray} value="Com taxa de" />
              <FieldText style={styles.textBold} value={`${parseFloat(simulation.annualNominalRate).toFixed(2)}% a.m.`} />
            </View>
          </View>
          <View style={styles.blockTwo}>
            <View style={styles.textIcon}>
              <FieldText style={styles.textGray} value="Previsão de pagamento" />
              <Icon name="help-circle-outline" size={20} color="#D22688" />
            </View>
            <FieldText style={styles.textBold} value="19 de maio a 01 de junho de 2021" />
            <TouchableOpacity style={styles.btnContratar}>
              <View style={styles.textIcon}>
                <FieldText style={styles.textBtnContratar} value="Contratar" />
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