import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import api from '../../services/api';

import OptionButton from '../../components/OptionButton';
import FieldText from '../../components/FieldText';
import InputText from '../../components/InputText';
import ButtonNext from '../../components/ButtonNext';

const Time = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState(0)
  const [otherValue, setOtherValue] = useState('')
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(0)
  const [periods, setPeriods] = useState([])

  useEffect(() => {
    async function getDadosApi() {
      await api.get('/suggestedperiods')
        .then(resp => {
          setPeriods(resp.data.suggestedInstallments);
          setMinValue(resp.data.minValue);
          setMaxValue(resp.data.maxValue);
        })
        .catch(err => alert(err))
    }
    getDadosApi();
  }, [])

  const handleClickContinue = () => {
    // console.log(selectedValue, otherValue, navigation.getParam('valueSelectedLoan'))
    if(otherValue !== '' && (parseInt(otherValue) > maxValue || parseInt(otherValue) < minValue)) {
      alert(`Please, enter a value between ${minValue} and ${maxValue}`)
      setOtherValue('');
    } else {
      setSelectedValue(parseInt(otherValue))
      navigation.navigate('Result', {
        valueSelectedLoan: navigation.getParam('valueSelectedLoan'),
        valueSelectedPeriod: selectedValue,
      })
    }
  }

  const handleSelectValue = (pos) => {
    setSelectedValue(periods[pos])
  }

  return (
    <View style={styles.container}>
        <FieldText style={styles.textAsk} value="Em quanto tempo você quer pagar?" />
        <View style={styles.values}>
          {periods.map((period, index) => (
            <OptionButton key={index} methodOnPress={() => handleSelectValue(index)} >
              <FieldText style={styles.textValueOption} value={`${period} meses`} />
            </OptionButton>
          ))}
        </View>
        <View style={styles.otherValue}>
          <InputText placeholder="00" value={otherValue} onChange={(text) => setOtherValue(text)} />
          <FieldText style={styles.textOtherValue} value="meses" />
        </View>
        <View style={styles.groupButtons}>
          <ButtonNext onPress={handleClickContinue}>
            <FieldText style={styles.textButton} value="Continuar" />
          </ButtonNext>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    paddingVertical: 30,
    paddingHorizontal: 15
  },
  textAsk: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  values: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  textValueOption: {
    fontSize: 18,
  },
  otherValue: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textOtherValue: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textInput: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    height: 40,
    width: 120,
    marginLeft: 8,
    textAlign: 'center'
  },
  groupButtons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 17,
    color: '#fff',
  }
})

export default Time;