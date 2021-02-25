import React from 'react';
import { TouchableOpacity, StyleSheet} from 'react-native';

function ButtonNext({children, onPress}) {
  return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
          {children}
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    backgroundColor: '#D22688',
    borderRadius: 50,
    textAlign: 'center',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
})

export default ButtonNext;