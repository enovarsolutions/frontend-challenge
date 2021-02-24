import React from 'react';
import { View, StyleSheet } from 'react-native';

import OptionButton from '../../components/OptionButton';
import FieldText from '../../components/FieldText';
import InputText from '../../components/InputText';
import ButtonNext from '../../components/ButtonNext';

const Time = ({navigation}) => {
  return (
    <View style={styles.container}>
        <FieldText style={styles.textAsk} value="Em quanto tempo você quer pagar?" />
        <View style={styles.values}>
          <OptionButton style={styles.itemValue}>
            <FieldText value="48 meses" style={styles.textValueOption} />
          </OptionButton>
          <OptionButton style={styles.itemValue}>
            <FieldText value="60 meses" style={styles.textValueOption} />
          </OptionButton>
          <OptionButton style={styles.itemValue}>
            <FieldText value="72 meses" style={styles.textValueOption} />
          </OptionButton>
          <OptionButton style={styles.itemValue}>
            <FieldText value="84 meses" style={styles.textValueOption} />
          </OptionButton>
        </View>
        <View style={styles.otherValue}>
          <InputText placeholder="00" />
          <FieldText style={styles.textOtherValue} value="meses" />
        </View>
        <View style={styles.groupButtons}>
          <ButtonNext screen="Result" navigation={navigation}>
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