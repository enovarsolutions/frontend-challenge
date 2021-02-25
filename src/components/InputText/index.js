import React from 'react';
import { TextInput, StyleSheet} from 'react-native';

function InputText({placeholder, value, onChange}) {
  return (
    <TextInput
      style={styles.textInput}
      value={value}
      placeholder={placeholder}
      onChangeText={onChange}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    height: 40,
    width: 120,
    marginLeft: 8,
    textAlign: 'center'
  },
})

export default InputText;