import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import api from '../../services/api';

import OptionButton from '../../components/OptionButton';
import FieldText from '../../components/FieldText';
import InputText from '../../components/InputText';
import ButtonNext from '../../components/ButtonNext';

const Value = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState(0)
  const [otherValue, setOtherValue] = useState('')
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(0)
  const [values, setValues] = useState([])

  useEffect(() => {
    async function getDadosApi() {
      await api.get('/suggestedvalues')
        .then(resp => {
          setValues(resp.data.suggestedValues);
          setMinValue(resp.data.minValue);
          setMaxValue(resp.data.maxValue);
        })
        .catch(err => alert(err))
    }
    getDadosApi();
  }, [])

  const handleClickContinue = () => {
    // console.log(selectedValue, otherValue)
    if(otherValue !== '' && (parseFloat(otherValue) > maxValue || parseFloat(otherValue) < minValue)) {
      alert(`Please, enter a value between ${minValue} and ${maxValue}`)
      setOtherValue('');
    } else {
      setSelectedValue(parseFloat(otherValue))
      navigation.navigate('Time', {
        valueSelectedLoan: selectedValue,
      })
    }
  }

  const handleSelectValue = (pos) => {
    setSelectedValue(values[pos])
  }

  return (
    <View style={styles.container}>
        <FieldText style={styles.textTask} value="De quanto você precisa?" />
        <View style={styles.values}>
          {values.map((value, index) => (
            <OptionButton key={index} methodOnPress={() => handleSelectValue(index)} >
              <FieldText style={styles.textValueOption} value={`R$ ${Math.round(value)}`} />
            </OptionButton>
          ))}
        </View>
        <View style={styles.otherValue}>
          <FieldText style={styles.textOtherValue} value="Outro valor" />
          <InputText placeholder="R$ 00,00" value={otherValue} onChange={(text) => setOtherValue(text)} />
        </View>
        <View style={styles.groupButtons}>
          <ButtonNext onPress={handleClickContinue}>
            <FieldText style={styles.textButton} value="Continuar" />
          </ButtonNext>
          <FieldText style={styles.textSimule} value="Simule pela parcela" />
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
  textTask: {
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
  groupButtons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 17,
    color: '#fff',
  },
  textSimule: {
    color: '#D22688',
    textDecorationLine: 'underline',
    textDecorationColor: '#D22688',
    fontSize: 14
  }
})

export default Value;