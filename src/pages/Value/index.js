import React from 'react';
import { View, StyleSheet } from 'react-native';

import OptionButton from '../../components/OptionButton';
import FieldText from '../../components/FieldText';
import InputText from '../../components/InputText';
import ButtonNext from '../../components/ButtonNext';

const Value = ({navigation}) => {
  return (
    <View style={styles.container}>
        <FieldText style={styles.textTask} value="De quanto você precisa?" />
        <View style={styles.values}>
          <OptionButton>
            <FieldText style={styles.textValueOption} value="R$ 300,00" />
          </OptionButton>
          <OptionButton>
            <FieldText style={styles.textValueOption} value="R$ 2.660,00" />
          </OptionButton>
          <OptionButton>
            <FieldText style={styles.textValueOption} value="R$ 5.030,00" />
          </OptionButton>
          <OptionButton>
            <FieldText style={styles.textValueOption} value="R$ 7.407,93" />
          </OptionButton>
        </View>
        <View style={styles.otherValue}>
          <FieldText style={styles.textOtherValue} value="Outro valor" />
          <InputText placeholder="R$ 00,00" />
        </View>
        <View style={styles.groupButtons}>
          <ButtonNext screen="Time" navigation={navigation}>
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