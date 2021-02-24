import React from 'react';
import { Text } from 'react-native';

// import { Container } from './styles';

function FieldText({value, style}) {
  return (
      <Text style={style}>{value}</Text>
  );
}

export default FieldText;